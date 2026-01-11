import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer_text'>
        <a
          className='footer_author'
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
