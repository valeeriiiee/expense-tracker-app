import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import Layout from './Layout/Layout';
import { refreshUser } from '../redux/Auth/operations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { selectIsRefreshing, selectIsLoggedIn } from '../redux/Auth/authSlice';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const MainTransactions = lazy(() => import('../pages/MainTransactions'));
const TransactionsHistory = lazy(() => import('../pages/TransactionsHistory'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute
              isLoggedIn={isLoggedIn}
              component={<Home />}
              redirectTo="/transactions/expenses"
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              isLoggedIn={isLoggedIn}
              component={<Login />}
              redirectTo="/transactions/expenses"
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              isLoggedIn={isLoggedIn}
              component={<Register />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/transactions/:transactionsType"
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={<MainTransactions />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/transactions/history/:transactionsType"
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={<TransactionsHistory />}
              redirectTo="/login"
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

// export default App;
