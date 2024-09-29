import { NavLink } from 'react-router-dom';
import { BgImageWrapper } from '../components/BgImageWrapper/BgImageWrapper';
import users1x from '../assets/images/images_users_1x@.png';
import users2x from '../assets/images/images_users_2x@.png';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <BgImageWrapper />
      <div className={style.containerHome}>
        <div className={style.containerText}>
          <p className={style.text}>Expense log</p>
          <h1 className={style.title}>
            Manage Your <span className={style.span}>Finances</span>{' '}
            Masterfully!
          </h1>
          <p className={style.textDesc}>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </p>
          <div className={style.containerButton}>
            <NavLink to="/register" className={style.buttonUp}>
              Sign Up
            </NavLink>
            <NavLink to="/login" className={style.buttonIn}>
              Sign In
            </NavLink>
          </div>
        </div>
        <div className={style.containerImg}>
          <picture>
            <source srcSet={`${users1x}, ${users2x} 2x`} type="image/png" />
            <img className={style.img} src={users1x} alt="Users photos" />
          </picture>
          <div className={style.containerUsers}>
            <h2 className={style.titleUsers}>1000 users +</h2>
            <p className={style.tx}>
              Trusted by users for reliable expense tracking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
