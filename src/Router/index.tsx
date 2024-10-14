/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../Pages/Home';
import { Suspense } from 'react';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          element: <ProtectedRoute />,
          path: '/',
          children: [
            {
              element: <HomePage />,
              path: 'home',
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
