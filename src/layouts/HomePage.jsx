import { toast } from 'sonner';

import VaulDrawer from '@/components/Drawer';
import ProductCard from '@/components/ProductCard';
import { Spinner } from '@/components/ui/spinner';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import { useProductDrawer } from '@/hooks/useProductDrawer';

export default function HomePage() {
  const {
    isDrawerOpen,
    selectedProductId,
    handleProductClick,
    handleCloseDrawer,
  } = useProductDrawer();
  const { data: filteredProducts, error, isLoading } = useFilteredProducts();

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
          <Spinner className='mx-auto block size-7 text-orange-400' />
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
        onClose={handleCloseDrawer}
      />
    </main>
  );
}
