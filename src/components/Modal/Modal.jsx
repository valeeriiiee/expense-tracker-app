import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#rootModal');

export const Modal = ({ children, pd, toggleModal, anotherModal = false }) => {
  useEffect(() => {
    if (anotherModal) return;
    const handleEscape = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal, anotherModal]);

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      toggleModal();
    }
  };

  const modalClass = classNames({
    [`${style.modal}`]: true,
    [`${style.form}`]: pd === 40,
    [`${style.profile}`]: pd === 60,
    [`${style.logout}`]: pd === 80,
  });

  // Check if the modalRoot element is valid
  if (!modalRoot) {
    console.error('Modal root container not found');
    return null; // Return null if the modal root is not found
  }

  return createPortal(
    <div className={style.wrapper} onClick={handleClick}>
      <div className={modalClass}>
        <button className={style.button} onClick={toggleModal}>
          <Icon className={style.icon} name={'x-mark'} size={24} />
        </button>
        {children}
      </div>
    </div>,

    modalRoot
  );
};
