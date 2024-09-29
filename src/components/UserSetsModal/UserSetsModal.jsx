import { UserSetsCard } from './UserSetsCard/UserSetsCard';
import { UserSetsForm } from './UserSetsForm/UserSetsForm';
import style from './UserSetsModal.module.css';

export const UserSetsModal = ({ toggleModal }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Profile settings</h2>
      <UserSetsCard />
      <UserSetsForm toggleModal={toggleModal} />
    </div>
  );
};
