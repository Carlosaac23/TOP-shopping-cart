import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';
import { Drawer } from 'vaul';

import { fetchProduct } from '../lib/fetch-product';

import ProductVaul from './ProductVaul';

export default function VaulDrawer({ productId, isOpen, onClose }) {
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

  console.log(product);

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='fixed right-0 bottom-0 left-0 h-fit bg-gray-100 outline-none'>
          <div className='bg-orange-50 p-4'>
            {isLoading && <BeatLoader color='#fb923c' />}
            {error && toast.error(error)}
            {product && <ProductVaul key={product.id} {...product} />}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
