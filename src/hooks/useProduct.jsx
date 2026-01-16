import { useEffect, useState } from 'react';

import { fetchProduct } from '../lib/fetch-product';

function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!productId) return;

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

export { useProduct };
