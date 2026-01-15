import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-center'>
      <h1 className='mb-4 text-error font-black'>Oops!</h1>
      <h2 className='mb-6 text-xl font-semibold uppercase'>
        404 - Page Not Found
      </h2>
      <p className='mb-4 w-100 tracking-wide'>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link
        className='rounded-3xl bg-orange-400 px-4 py-2 shadow-xs transition-shadow duration-150 ease-out hover:shadow-md'
        to='/TOP-shopping-cart/'
      >
        Go To Homepage
      </Link>
    </main>
  );
}
