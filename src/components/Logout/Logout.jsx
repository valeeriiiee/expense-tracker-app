import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/Auth/operations';
import style from './Logout.module.css';

export const LogOut = ({ toggleLogOutModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    dispatch(logOut())
      .unwrap()
      .then(() => {
        navigate('/');
        toggleLogOutModal();
        toast.warning('In order to use the application you must log in');
      })
      .catch(() => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <p className={style.title}>Are you sure you want to log out?</p>
      <div className={style.container}>
        <button
          className={style.button}
          onClick={handleLogout}
          disabled={isLoading}
        >
          Log out
        </button>
        <button className={style.buttonCansel} onClick={toggleLogOutModal}>
          Cancel
        </button>
      </div>
    </>
  );
};
