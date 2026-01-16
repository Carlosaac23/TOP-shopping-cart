export default function ProductVaul({
  title,
  category,
  description,
  image,
  price,
  rating: { rate, count },
}) {
  return (
    <div className='flex items-center justify-between gap-8 rounded-custom border border-neutral-300 p-4 shadow-xs'>
      <div className='w-1/2'>
        <img
          className='h-48 w-full object-contain'
          src={image}
          alt='Product Image'
        />
      </div>
      <div>
        <h2 className='mb-2 text-lg font-bold tracking-wide text-orange-400'>
          {title}
        </h2>
        <p className='mb-2 inline-block rounded-sm bg-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-800 capitalize'>
          Category: {category}
        </p>
        <p className='mb-3 text-sm'>{description}</p>

        <p className='text-xlg mb-3 inline-block rounded-md bg-orange-400 px-3 py-1 font-bold'>
          {price}
        </p>
        <div className='flex gap-2 text-sm'>
          <span className='font-semibold'>Rating: {rate}</span>
          <span className='text-neutral-500'>({count})</span>
        </div>
      </div>
    </div>
  );
}
