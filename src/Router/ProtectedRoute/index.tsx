/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Login from '../../Pages/Login';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../Redux/hooks';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      setIsAuthenticated(true);
    }
    if (!isLoggedIn) {
      setIsAuthenticated(false);
    }
  }, [isLoggedIn]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return <div>{!isAuthenticated ? <Login /> : <Outlet />}</div>;
};

export default ProtectedRoute;
