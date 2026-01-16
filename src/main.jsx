import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import App from './App';
import CartPage from './layouts/CartPage';
import ErrorPage from './layouts/ErrorPage';
import HomePage from './layouts/HomePage';
import ShopPage from './layouts/ShopPage';

const router = createBrowserRouter([
  {
    path: '/TOP-shopping-cart/',
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
    <Toaster richColors />
  </StrictMode>
);

const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  window.history.replaceState(null, '', redirectPath);
  router.navigate(redirectPath.replace('/TOP-shopping-cart', ''));
}
