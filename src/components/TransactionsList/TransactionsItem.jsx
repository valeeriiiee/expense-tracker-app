import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Shorter, ShorterDate } from './shorter';
import {
  deleteTransaction,
  getTransactions,
} from '../../redux/Transaction/operations';
import { Icon } from 'components';
import { fetchCurrentUser } from '../../redux/User/operations';
import style from './TransactionsItem.module.css';
import { selectCurrency } from '../../redux/User/userSlice';
import { useParams } from 'react-router-dom';

export const TransactionsItem = ({ item, handleOpenModal }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { transactionsType } = useParams();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const dispatch = useDispatch();

  const handleDeleteTransaction = id => {
    dispatch(deleteTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        dispatch(getTransactions({ type: transactionsType }));
        toast.success('Transaction deleted successfully');
      })
      .catch(error => toast.error('Something wrong !'));
  };

  const convertDate = dateString => {
    const dateObj = new Date(dateString);
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dayOfWeek = days[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const formattedDate = `${dayOfWeek}, ${
      day[0] === '0' ? day.substring(1) : day
    }.${month.toString().padStart(2, '0')}.${year}`;
    return formattedDate;
  };

  const currency = useSelector(selectCurrency);

  return (
    <ul className={style.tr} key={item._id}>
      <li className={style.td}>
        {Shorter(item.category.categoryName, windowSize)}
      </li>
      <li className={style.td}>{Shorter(item.comment, windowSize)}</li>
      <li className={style.td}>
        {ShorterDate(convertDate(item.date), windowSize)}
      </li>
      <li className={style.td}>{item.time}</li>
      <li className={style.td}>
        {item.sum} / {currency.toUpperCase()}
      </li>
      <li className={style.td}>
        <div className={style.btnContainer}>
          <button
            className={style.btnTable}
            onClick={() => handleOpenModal(item)}
          >
            <div className={style.textEdit}>Edit</div>
            <Icon name="edit" className={style.iconEdit} size="16" />
          </button>
          <button
            className={style.btnTableDel}
            onClick={() => handleDeleteTransaction(item._id)}
          >
            <Icon name="trash-bin" className={style.iconDelete} size="16" />

            <div className={style.textCont}>
              <span>Delete</span>
            </div>
          </button>
        </div>
      </li>
    </ul>
  );
};
