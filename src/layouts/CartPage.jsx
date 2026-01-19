import { toast } from 'sonner';

import ProductInfo from '@/components/ProductInfo';
import { useCart } from '@/contexts/CartContext';
import { fakeShippingCosts, fakeSalesTaxes } from '@/utils';

export default function CartPage() {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shippingCost = fakeShippingCosts(subtotal);
  const salesTax = fakeSalesTaxes(subtotal);
  const total = subtotal + shippingCost + salesTax;

  function handleCheckout() {
    if (total === 0) {
      toast.error('Add a product to your cart.');
    } else {
      toast.success('Your payment has been submitted.');
    }
  }

  return (
    <main className='mx-10 flex justify-between gap-6'>
      <div className='w-9/12'>
        <h1 className='my-8 text-4xl font-bold tracking-tight'>
          My Shopping Cart
        </h1>
        <div className='mb-6 flex flex-col gap-2'>
          {cartItems.map(product => (
            <ProductInfo key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className='my-6'>
        <h2 className='text-2xl font-semibold'>Summary</h2>
        <div className='mb-4'>
          <p className='text-sm'>Do you have promo code?</p>
          <input
            className='rounded-sm bg-orange-100 pl-1 placeholder:text-sm'
            type='text'
            name='promo'
            id='promo'
            placeholder='PROMOCODE'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h3>
            Subtotal:{' '}
            <span className='font-semibold'>${subtotal.toFixed(2)}</span>
          </h3>
          <p>
            Shipping:{' '}
            <span className='font-semibold'>
              {subtotal === 0
                ? '$0'
                : shippingCost === 0
                  ? 'Free'
                  : `$${shippingCost.toFixed(2)}`}
            </span>
          </p>
          <p>
            Sales Tax:{' '}
            <span className='font-semibold'>${salesTax.toFixed(2)}</span>
          </p>
          <p>
            Estimated Total:{' '}
            <span className='font-semibold'>
              ${total === 0 ? 0 : total.toFixed(2)}
            </span>
          </p>
          <button
            className='rounded-md bg-orange-400 px-4 py-1 text-orange-50 shadow-xs hover:cursor-pointer'
            type='button'
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
        <div className='mt-8 text-xs'>
          <p>
            Need help? Call us at{' '}
            <a className='underline' href='tel:+573007410161'>
              3007410161
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
