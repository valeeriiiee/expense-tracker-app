import RegisterForm from 'components/RegisterForm/RegisterForm';
// import LoginForm from '../components/LoginForm/LoginForm';
import style from './Login.module.css';

const Login = () => {
  return (
    <div className={style.container}>
      <RegisterForm signIn />
    </div>
  );
};

export default Login;
