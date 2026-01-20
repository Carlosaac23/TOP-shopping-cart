import { useState, useEffect } from 'react';

import { fetchProducts } from '@/lib/fetch-products';

export function useProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, error, isLoading };
}
