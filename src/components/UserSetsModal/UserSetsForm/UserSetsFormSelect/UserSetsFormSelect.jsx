import { useRef, useState } from 'react';
import { UserSetsFormList } from './UserSetsFormList';
import { Icon } from '../../../Icon/Icon';
import { choseLabel, options } from '../../../../js/choseLabel';
import style from './UserSetsFormSelect.module.css';

export const UserSetsFormSelect = ({
  register,
  setValue,
  setCurrency,
  currency,
}) => {
  const box = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    setIsOpen(!isOpen);
  };

  const handleChose = element => {
    setCurrency(element.value);
    setValue('currency', element.value);
  };

  return (
    <div ref={box} onClick={handleToggle} className={style.container}>
      <p className={style.text}>{choseLabel(currency)}</p>
      <div className={style.iconWrapper}>
        <Icon
          className={style.icon}
          name={`${isOpen ? 'chevron-up' : 'chevron-down'}`}
          size={16}
        />
      </div>
      {isOpen && (
        <UserSetsFormList
          options={options}
          handleChose={handleChose}
          boxRef={box}
          handleToggle={handleToggle}
        />
      )}
      <input
        className={style.input}
        {...register('currency')}
        value={currency}
      />
    </div>
  );
};
