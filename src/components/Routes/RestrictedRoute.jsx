import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/Auth/authSlice';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // console.log(`RestrictedRoute - isLoggedIn: ${isLoggedIn}, redirectTo: ${redirectTo}`);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
