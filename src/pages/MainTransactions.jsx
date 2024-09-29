import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCurrentUser } from '../redux/User/operations';
import { TransactionForm } from '../components/TransactionForm/TransactionForm';
import { TransactionsChart } from '../components/TransactionsChart/TransactionsChart';
import { TransactionsTotal } from '../components/TransactionsTotal/TransactionsTotal';
import {
  addTransaction,
  getTransactions,
} from '../redux/Transaction/operations';
import style from './MainTransactions.module.css';

const MainTransactions = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  useEffect(() => {
    dispatch(getTransactions({ type: transactionsType }));
  }, [dispatch, transactionsType]);

  const capitalizedType =
    transactionsType[0].toUpperCase() + transactionsType.slice(1);

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        toast.success('Transaction added successfully!');
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  return (
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
          <h2 className={style.title}>{capitalizedType.slice(0, -1)} Log</h2>
          <p className={style.descr}>
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertipstyle.
          </p>
        </div>
        <div className={style.total}>
          <TransactionsTotal />
        </div>
        <div className={style.form}>
          <TransactionForm
            transactionsType={transactionsType}
            onSubmitForm={onSubmitForm}
          />
        </div>
        <div className={style.chart}>
          <TransactionsChart transactionsType={capitalizedType} />
        </div>
      </div>
    </div>
  );
};

export default MainTransactions;
