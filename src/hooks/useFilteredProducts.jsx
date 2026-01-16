import { useState, useEffect } from 'react';

import { fetchProducts } from '../lib/fetch-products';
import { randomNumber } from '../utils';

function useFilteredProducts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const filteredProducts = [];
        const data = await fetchProducts();

        while (filteredProducts.length < 3) {
          const randomId = randomNumber(data.length);
          const newProduct = data.find(product => product.id === randomId);
          const isDuplicate = filteredProducts.some(
            product => product.id === newProduct.id
          );

          if (!isDuplicate) {
            filteredProducts.push(newProduct);
          }
        }

        setData(filteredProducts);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error, isLoading };
}

export { useFilteredProducts };
