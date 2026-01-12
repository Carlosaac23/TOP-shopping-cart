import { Link } from 'react-router';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Shopping Cart</h1>

      <nav>
        <ul className='header__links'>
          <Link to='/TOP-shopping-cart/' className='header__link'>
            Home
          </Link>
          <Link to='shop' className='header__link'>
            Shop
          </Link>
          <Link to='cart' className='header__link'>
            Cart
          </Link>
        </ul>
      </nav>
    </header>
  );
}
