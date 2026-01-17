import ProductInfo from '@/ProductInfo';

import { useCart } from '../contexts/CartContext';
import { fakeShippingCosts, fakeSalesTaxes } from '../utils';

export default function CartPage() {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shippingCost = fakeShippingCosts(subtotal);
  const salesTax = fakeSalesTaxes(subtotal);
  const total = subtotal + shippingCost + salesTax;

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
      <div>
        <h2>Summary</h2>
        <div>
          <p>Do you have promo code?</p>
          <input type='text' name='' id='' />
        </div>
        <div>
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
              ${total === 33 ? '0' : total.toFixed(2)}
            </span>
          </p>
          <button type='button'>Checkout</button>
        </div>
        <div>
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
