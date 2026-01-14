import { Outlet } from 'react-router';

import Footer from '@/Footer/Footer';
import Header from '@/Header/Header';

export default function App() {
  return (
    <div className='main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
