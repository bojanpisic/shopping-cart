import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { Paths } from './path-constants';
import Layout from '../components/layouts/Layout';
const ProductsListPage = lazy(() => import('../pages/ProductsListPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to={Paths.Products} replace />,
        },
        {
          path: Paths.Products,
          element: <ProductsListPage />,
          errorElement: <h1>Oops something went wrong</h1>,
        },
        {
          path: Paths.ProductDetails,
          element: <ProductDetailPage />,
          errorElement: <h1>Oops something went wrong</h1>,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
