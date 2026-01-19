import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router';

import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className='flex items-center justify-between bg-orange-400 p-8 shadow-sm'>
      <Link to='/TOP-shopping-cart/'>
        <h1 className='text-2xl font-extrabold tracking-wider uppercase'>
          Minimal Shop
        </h1>
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
            Products
          </Link>
          <Link
            to='cart'
            className='rounded-md px-4 py-2 hover:bg-orange-600 hover:text-orange-50'
          >
            <ShoppingBasket />
            {totalItems > 0 && (
              <span className='absolute top-8 right-10 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs text-orange-50'>
                {totalItems}
              </span>
            )}
          </Link>
        </ul>
      </nav>
    </header>
  );
}
