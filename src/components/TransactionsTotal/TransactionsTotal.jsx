import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Icon } from 'components';
import { selectUser } from '../../redux/User/userSlice';
import { getCurrencyChar, getPath } from '../../js';

import style from './TransactionsTotal.module.css';

export const TransactionsTotal = ({
  totalAllExpenses = null,
  totalAllIncomes = null,
}) => {
  const [path, setPath] = useState({});
  const location = useLocation();

  const { totalIncomes, totalExpenses, currency } = useSelector(selectUser);
  const currencyChar = getCurrencyChar(currency);

  useEffect(() => {
    setPath(getPath(location));
  }, [location]);

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.link} to={path.incomes}>
            <div className={style.iconContainer}>
              <Icon className={style.icon} name="arrow-up" size="18" />
            </div>
          </Link>
          <div>
            <h3 className={style.amountTitle}>Total Income</h3>
            <p className={style.amountDescr}>
              {currencyChar}
              {totalAllIncomes || totalIncomes}
            </p>
          </div>
        </li>
        <li className={style.listItem}>
          <Link className={style.link} to={path.expenses}>
            <div className={style.iconContainer}>
              <Icon className={style.icon} name="arrow-down" size="18" />
            </div>
          </Link>
          <div>
            <h3 className={style.amountTitle}>Total Expense</h3>
            <p className={style.amountDescr}>
              {currencyChar}
              {totalAllExpenses || totalExpenses}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
