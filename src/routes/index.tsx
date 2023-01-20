import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { lazyImport } from '@/utils/lazy-import';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

const { Home } = lazyImport(() => import('@/features/misc'), 'Home');

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Home /> }];

  const routes = [...protectedRoutes, ...publicRoutes, ...commonRoutes];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
