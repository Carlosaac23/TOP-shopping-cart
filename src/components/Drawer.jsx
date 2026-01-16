import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';
import { Drawer } from 'vaul';

import { useProduct } from '../hooks/useProduct';

import ProductVaul from './ProductVaul';

export default function VaulDrawer({ productId, isOpen, onClose }) {
  const { product, error, isLoading } = useProduct(productId);

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='fixed right-0 bottom-0 left-0 h-fit bg-gray-100 outline-none'>
          <div className='bg-orange-50 p-4'>
            {isLoading && (
              <BeatLoader
                color='#fb923c'
                cssOverride={{ textAlign: 'center' }}
              />
            )}
            {error && toast.error(error)}
            {product && <ProductVaul key={product.id} {...product} />}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
