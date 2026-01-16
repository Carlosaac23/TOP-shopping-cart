import { CirclePlus } from 'lucide-react';

export default function ProductCard({
  id,
  image,
  title,
  category,
  price,
  rating: { count, rate },
  onProductClick,
}) {
  return (
    <div className='w-80 rounded-custom border border-neutral-300 p-4 shadow-xs transition-shadow duration-150 ease-out hover:shadow-md'>
      <img
        className='h-40 w-full rounded-xl bg-neutral-200 object-contain p-4'
        src={image}
        alt='Product Image'
      />
      <div className='flex items-center justify-between py-4'>
        <h2
          className='w-[75%] truncate text-orange-400 hover:cursor-pointer'
          onClick={() => onProductClick(id)}
          title={title}
        >
          {title}
        </h2>
        <CirclePlus
          className='hover:cursor-pointer'
          size={28}
          color='#fb923c'
        />
      </div>
      <p className='mb-2 text-xs text-neutral-500 uppercase'>{category}</p>
      <p className='text-xlg inline-block rounded-md bg-orange-400 px-3 py-1 font-bold'>
        ${price}
      </p>
      <div className='mt-3.5 flex gap-2 text-sm'>
        <span className='font-semibold'>Rating: {rate}</span>
        <span className='text-neutral-500'>({count})</span>
      </div>
    </div>
  );
}
