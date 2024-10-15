/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
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
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          element: <ProtectedRoute />,
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
