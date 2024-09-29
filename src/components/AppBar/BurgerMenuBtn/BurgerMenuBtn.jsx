import { Icon } from '../../Icon/Icon';
import style from './BurgerMenuBtn.module.css';

const BurgerMenuBtn = ({ toggleMenu }) => (
  <button className={style.burgerMenuBtn} onClick={toggleMenu}>
    <Icon name="burger-menu" className={style.burgerMenuBtn} />
  </button>
);

export default BurgerMenuBtn;
