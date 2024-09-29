import RegisterForm from '../components/RegisterForm/RegisterForm';
import style from './Register.module.css';

const Register = () => {
  return (
    <div className={style.container}>
      <RegisterForm signUp />
    </div>
  );
};

export default Register;
