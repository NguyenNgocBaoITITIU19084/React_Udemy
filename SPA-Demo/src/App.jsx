import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import RootLayout from './components/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product', element: <Product /> },
      { path: '/product/:productId', element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
