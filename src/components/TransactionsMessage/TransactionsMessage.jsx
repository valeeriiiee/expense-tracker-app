import style from './TransactionsMessage.module.css';

export const TransactionsMessage = ({ message }) => {
  return <h2 className={style.message}>{message}</h2>;
};
