import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-orange-400 p-8 shadow-sm'>
      <Link to='/TOP-shopping-cart/'>
        <h1 className='text-2xl font-extrabold uppercase'>Shopping Cart</h1>
      </Link>

      <nav>
        <ul className='flex gap-2'>
          <Link
            to='/TOP-shopping-cart/'
            className='rounded-md px-4 py-2 hover:bg-orange-600 hover:text-orange-50'
          >
            Home
          </Link>
          <Link
            to='shop'
            className='rounded-md px-4 py-2 hover:bg-orange-600 hover:text-orange-50'
          >
            Shop
          </Link>
          <Link
            to='cart'
            className='rounded-md px-4 py-2 hover:bg-orange-600 hover:text-orange-50'
          >
            <ShoppingBasket />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
