import { GrPowerReset } from 'react-icons/gr';
import { MdAddCard } from 'react-icons/md';
import style from './UniversalButton.module.css';

export const UniversalButton = ({ action, type }) => {
  return (
    <button onClick={action} type="button" className={style.button}>
      {type === 'reset' ? (
        <GrPowerReset className={style.btnIcon} />
      ) : (
        <MdAddCard className={style.btnIcon} />
      )}
    </button>
  );
};
