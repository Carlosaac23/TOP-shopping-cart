import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import App from './App';
import CartPage from './layouts/CartPage';
import HomePage from './layouts/HomePage';
import ShopPage from './layouts/ShopPage';

const router = createBrowserRouter([
  {
    path: '/TOP-shopping-cart/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors />
  </StrictMode>
);
