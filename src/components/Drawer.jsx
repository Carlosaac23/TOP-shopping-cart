import { toast } from 'sonner';
import { Drawer } from 'vaul';

import ProductVaul from '@/components/ProductVaul';
import { Spinner } from '@/components/ui/spinner';
import { useProduct } from '@/hooks/useProduct';

export default function VaulDrawer({ productId, isOpen, onClose }) {
  const { product, error, isLoading } = useProduct(productId);

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='fixed right-0 bottom-0 left-0 h-fit bg-gray-100 outline-none'>
          <div className='bg-orange-50 p-4'>
            {isLoading && (
              <Spinner className='mx-auto block size-7 text-orange-400' />
            )}
            {error && toast.error(error)}
            {product && <ProductVaul key={product.id} {...product} />}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
