import { Outlet } from 'react-router';

import Footer from '@/Footer';
import Header from '@/Header';

export default function App() {
  return (
    <div className='flex min-h-screen flex-col bg-orange-50 text-neutral-950'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
