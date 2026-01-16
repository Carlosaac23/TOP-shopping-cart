import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';

import VaulDrawer from '@/Drawer';
import ProductCard from '@/ProductCard';

import { fetchProducts } from '../lib/fetch-products';
import { randomNumber } from '../utils';

function useFilterProducts() {
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

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { data: filteredProducts, error, isLoading } = useFilterProducts();

  function handleProductClick(productId) {
    setIsDrawerOpen(true);
    setSelectedProductId(productId);
  }

  return (
    <main className='bg-orange-50 px-6 py-12'>
      <section className='mx-auto max-w-4xl text-center'>
        <h1 className='text-4xl font-bold tracking-tight'>Minimal Shop</h1>
        <p className='mt-4 text-lg text-neutral-500'>
          Simple products. Clean design. Everyday essentials.
        </p>
      </section>

      <section className='mx-auto mt-16 max-w-5xl'>
        <h2 className='mb-6 text-xl font-semibold text-neutral-800'>
          Featured Products
        </h2>
        {isLoading && (
          <BeatLoader
            size={20}
            color='#fb923c'
            cssOverride={{
              textAlign: 'center',
            }}
          />
        )}
        {error && toast.error(error)}

        {filteredProducts && (
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {filteredProducts?.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>
        )}
      </section>
      <VaulDrawer
        isOpen={isDrawerOpen}
        productId={selectedProductId}
        onClose={() => setIsDrawerOpen(false)}
      />
    </main>
  );
}
