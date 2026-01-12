import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <Link className='header__title-link' to='/TOP-shopping-cart/'>
        <h1 className='header__title'>Shopping Cart</h1>
      </Link>

      <nav>
        <ul className='header__links'>
          <Link to='/TOP-shopping-cart/' className='header__link'>
            Home
          </Link>
          <Link to='shop' className='header__link'>
            Shop
          </Link>
          <Link to='cart' className='header__link'>
            <ShoppingBasket />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
