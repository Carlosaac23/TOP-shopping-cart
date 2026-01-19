import { toast } from 'sonner';

import VaulDrawer from '@/components/Drawer';
import ProductCard from '@/components/ProductCard';
import { Spinner } from '@/components/ui/spinner';
import { useProductDrawer } from '@/hooks/useProductDrawer';
import { useProducts } from '@/hooks/useProducts';

export default function ProductsPage() {
  const {
    isDrawerOpen,
    selectedProductId,
    handleProductClick,
    handleCloseDrawer,
  } = useProductDrawer();
  const { products, error, isLoading } = useProducts();

  return (
    <main>
      <h1 className='my-8 text-center text-4xl font-bold tracking-tight'>
        Products
      </h1>
      {isLoading && (
        <Spinner className='mx-auto block size-7 text-orange-400' />
      )}
      {error && toast.error(error)}
      {products && (
        <div className='mx-8 mb-10 flex flex-wrap justify-center gap-6'>
          {products?.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      )}
      <VaulDrawer
        isOpen={isDrawerOpen}
        productId={selectedProductId}
        onClose={handleCloseDrawer}
      />
    </main>
  );
}
