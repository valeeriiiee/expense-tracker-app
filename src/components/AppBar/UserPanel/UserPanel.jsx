import { useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import style from './UserPanel.module.css';
import { Icon } from '../../Icon/Icon';

const UserPanel = ({
  closeUserBar,
  toggleUserBarBtn,
  userBtnRef,
  closeMenu,
  isMenuOpen,
  toggleProfileModal,
  toggleLogOutModal,
}) => {
  const panelRef = useRef(null);

  useOutsideClick(panelRef, toggleUserBarBtn);

  return (
    <div ref={panelRef} className={style.userPanelBody}>
      <button className={style.userPanelBtn} onClick={toggleProfileModal}>
        <Icon name="user" className={style.userIcon} />
        <span>Edit Profile</span>
      </button>
      <button className={style.userPanelBtn} onClick={toggleLogOutModal}>
        <Icon name="logout" className={style.logOutIcon} />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default UserPanel;
