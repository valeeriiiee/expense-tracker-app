import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/Auth/authSlice';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // console.log(`PrivateRoute - isLoggedIn: ${isLoggedIn}, redirectTo: ${redirectTo}`);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
