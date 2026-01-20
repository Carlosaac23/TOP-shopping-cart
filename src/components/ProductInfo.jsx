import { useCart } from '@/contexts/CartContext';

export default function ProductInfo({ id, image, title, price, quantity }) {
  const { removeFromCart, updateQuantity } = useCart();
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const handleUpdateQuantity = e => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(id, newQuantity);
  };

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
      <div className='flex flex-col justify-between'>
        <div className='flex gap-2'>
          <p>Quantity:</p>
          <input
            className='w-20 rounded-sm bg-orange-50 pl-2'
            value={quantity}
            onChange={handleUpdateQuantity}
            type='number'
            name='quantity'
            id='quantity'
          />
        </div>
        <div className='self-end'>
          <p>
            Each: <span className='font-bold'>${price}</span>
          </p>
          <p>
            Total:{' '}
            <span className='font-bold'>${(price * quantity).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
