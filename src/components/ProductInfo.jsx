import { useCart } from '../contexts/CartContext';

export default function ProductInfo({ id, image, title, price, quantity }) {
  const { removeFromCart } = useCart();
  function handleRemoveFromCart() {
    removeFromCart(id);
  }

  return (
    <div className='flex justify-between rounded-md bg-orange-100 p-4'>
      <div className='flex items-center gap-6'>
        <img
          className='h-30 w-30 object-contain'
          src={image}
          alt='Product Image'
        />
        <div className='flex h-full flex-col justify-between'>
          <h2 className='w-100'>{title}</h2>
          <p
            className='self-start text-xs font-semibold hover:cursor-pointer hover:underline'
            onClick={handleRemoveFromCart}
          >
            Remove
          </p>
        </div>
      </div>
      <div>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}
