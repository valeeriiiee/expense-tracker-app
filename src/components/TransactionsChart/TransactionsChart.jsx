import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Chart } from '../PieChart/PieChart';
import { countCategories } from '../../js/countCategories';
import {
  selectTransactions,
  selectTransactionsError,
} from '../../redux/Transaction/transactionSlice';
import { selectUser } from '../../redux/User/userSlice';
import { fetchCurrentUser } from '../../redux/User/operations';
import warningImg from '../../assets/images/no_data_abstract.png';
import errorImg from '../../assets/images/server-error.png';
import style from './TransactionsChart.module.css';

export const TransactionsChart = ({ transactionsType }) => {
  const [categoriesData, setCategoriesData] = useState(null);
  const dispatch = useDispatch();

  const { totalIncomes, totalExpenses } = useSelector(selectUser);
  const error = useSelector(selectTransactionsError);
  const data = useSelector(selectTransactions);

  const totalRef = useRef(
    transactionsType === 'Incomes' ? totalIncomes : totalExpenses
  );

  useEffect(() => {
    totalRef.current =
      transactionsType === 'Incomes' ? totalIncomes : totalExpenses;
  }, [totalIncomes, totalExpenses, transactionsType]);

  useEffect(() => {
    if (data === null) return;

    dispatch(fetchCurrentUser())
      .unwrap()
      .then(() => {
        setCategoriesData(countCategories(data, totalRef.current));
      })
      .catch();
  }, [data, dispatch]);

  if (data === null || categoriesData === null) return;

  if (error)
    return (
      <div className={style.warningWrapper}>
        <h2 className={style.warningTitle}>
          Sorry, something went wrong. Please try again...
        </h2>
        <img className={style.imgNoData} src={errorImg} alt="Error fetch" />
      </div>
    );

  return !categoriesData.length ? (
    <div className={style.warningWrapper}>
      <h2 className={style.warningTitle}>
        You don't have any {transactionsType.toLowerCase()} in this month.
      </h2>
      <img className={style.imgNoTransactions} src={warningImg} alt="No data" />
    </div>
  ) : (
    <div className={style.chartContainer}>
      <h3 className={style.title}>{transactionsType} categories</h3>
      <div className={style.statsWrapper}>
        <div className={style.pieChartWrapper}>
          <Chart data={categoriesData} />
          <p className={style.chartDescr}>100%</p>
        </div>
        <ul className={`${style.list} scroll scrollA`}>
          {categoriesData.map((item, index) => (
            <li className={style.listItem} key={index}>
              <div
                className={style.wrapperMarker}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className={style.itemDescr}>{item.name}</p>
              <p className={style.itemSpan}>{item.value}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
