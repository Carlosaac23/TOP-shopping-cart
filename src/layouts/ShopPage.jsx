import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';

import VaulDrawer from '@/Drawer';
import ProductCard from '@/ProductCard';

import { useProductDrawer } from '../hooks/useProductDrawer';
import { useProducts } from '../hooks/useProducts';

export default function ShopPage() {
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
        <BeatLoader
          size={20}
          color='#fb923c'
          cssOverride={{
            textAlign: 'center',
          }}
        />
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
