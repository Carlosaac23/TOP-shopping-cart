export default function Footer() {
  return (
    <footer className='mt-auto bg-orange-400 p-2'>
      <p className='text-center text-sm'>
        <a
          className='hover:underline hover:underline-offset-1'
          href='https://github.com/Carlosaac23'
          target='_blank'
          rel='noopener noreferrer'
        >
          Carlos Acosta
        </a>{' '}
        {new Date().getFullYear()} &copy; Rights Reservded
      </p>
    </footer>
  );
}
