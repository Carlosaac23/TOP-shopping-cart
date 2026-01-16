export default function ProductInfo({ image, title, price, quantity }) {
  return (
    <div className='flex justify-between rounded-md bg-orange-100 p-4'>
      <div className='flex items-center gap-6'>
        <img
          className='h-30 w-30 object-contain'
          src={image}
          alt='Product Image'
        />
        <h2 className='w-100 self-start'>{title}</h2>
      </div>
      <div>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}
