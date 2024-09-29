import { useEffect } from 'react';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import { Icon } from '../../Icon/Icon';
import TransactionHistoryNav from '../TransactionHistoryNav/TransactionHistoryNav';
import style from './BurgerMenu.module.css';

const BurgerMenu = ({
  toggleMenu,
  handleButtonAndToggleMenu,
  isMenuOpen,
  closeMenu,
  toggleProfileModal,
  toggleLogOutModal,
}) => {
  useEffect(() => {
    document.body.classList.toggle(style.noScroll, isMenuOpen);
    return () => document.body.classList.remove(style.noScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <div className={style.backdrop} onClick={toggleMenu}></div>
      <div className={style.mobileMenu}>
        <div className={style.userBarBtnWrapper}>
          <UserBarBtn
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleProfileModal={toggleProfileModal}
            toggleLogOutModal={toggleLogOutModal}
          />
          <button className={style.closeBtn} onClick={toggleMenu}>
            <Icon name="close-btn" className={style.closeBtnIcon} />
          </button>
        </div>
        <TransactionHistoryNav
          handleButtonAndToggleMenu={handleButtonAndToggleMenu}
        />
      </div>
    </>
  );
};

export default BurgerMenu;
