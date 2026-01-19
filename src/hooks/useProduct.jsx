import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { fetchProduct } from '../lib/fetch-product';

export function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!productId) return;

        setIsLoading(true);
        setProduct(null);

        const data = await fetchProduct(productId);
        setProduct(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProduct(null);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [productId]);

  return { product, error, isLoading };
}
