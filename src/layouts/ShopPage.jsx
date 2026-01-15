import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';

import ProductCard from '@/ProductCard';

import { fetchProducts } from '../lib/fetch-products';

function useProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  return { products, error, isLoading };
}

export default function ShopPage() {
  const { products, error, isLoading } = useProducts();

  if (error) {
    toast.error(error);
    return;
  }

  return (
    <main>
      <h1 className='my-8 text-center text-4xl font-bold tracking-tight'>
        Products
      </h1>
      {isLoading ? (
        <BeatLoader
          size={20}
          color='#fb923c'
          cssOverride={{
            textAlign: 'center',
          }}
        />
      ) : (
        <div className='mx-8 mb-10 flex flex-wrap justify-center gap-6'>
          {products?.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </main>
  );
}
