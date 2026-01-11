import Footer from '@/Footer/Footer';
import Header from '@/Header/Header';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <div className='main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
