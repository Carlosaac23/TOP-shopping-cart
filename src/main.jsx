import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
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
