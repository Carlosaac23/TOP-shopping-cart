import ProductInfo from '@/ProductInfo';

import { useCart } from '../contexts/CartContext';

export default function CartPage() {
  const { cartItems } = useCart();
  console.log(cartItems);

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
          <h3>Subtotal:</h3>
          <p>Shipping:</p>
          <p>Sales Tax:</p>
          <p>Estimated Total:</p>
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
