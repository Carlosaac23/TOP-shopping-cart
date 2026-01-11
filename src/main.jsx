import Footer from '@/Footer/Footer';
import Header from '@/Header/Header';
import Main from '@/Main/Main';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
      <Header />
      <Main />
      <Footer />
    </div>
  </StrictMode>
);
