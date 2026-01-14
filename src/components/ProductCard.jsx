import { CirclePlus } from 'lucide-react';

import { capitalize } from '../utils';

export default function ProductCard({
  image,
  title,
  category,
  price,
  rating: { count, rate },
}) {
  return (
    <div className='w-100 rounded-[1.6rem] border border-neutral-300 p-6 shadow-sm transition-transform duration-150 ease-out hover:scale-[1.05]'>
      <img
        className='h-40 w-full rounded-md bg-neutral-200 object-contain p-4'
        src={image}
        alt='Product Image'
      />
      <div className='flex items-center justify-between py-4'>
        <h2 className='w-[75%] text-xl text-orange-400'>{title}</h2>
        <CirclePlus size={28} color='#fb923c' />
      </div>
      <p className='mb-2 text-sm text-neutral-500 uppercase'>
        {capitalize(category)}
      </p>
      <p className='inline-block rounded-md bg-orange-400 px-4 py-2 text-2xl font-bold'>
        ${price}
      </p>
      <div className='mt-3.5 flex gap-2'>
        <span className='font-semibold'>Rating: {rate}</span>
        <span className='text-neutral-500'>({count})</span>
      </div>
    </div>
  );
}
