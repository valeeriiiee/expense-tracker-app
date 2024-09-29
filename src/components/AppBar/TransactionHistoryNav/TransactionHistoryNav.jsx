import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import style from './TransactionHistoryNav.module.css';

const TransactionsHistoryNav = ({
  activeButton,
  handleButtonAndToggleMenu,
}) => {
  const isMobileScreen = useMediaQuery({ query: '(min-width: 320px)' });
  const { transactionsType } = useParams();

  useEffect(() => {
    handleButtonAndToggleMenu(transactionsType);
  }, [transactionsType, handleButtonAndToggleMenu]);

  const getButtonStyle = (buttonName, currentPage) =>
    activeButton === buttonName || window.location.pathname === currentPage
      ? style.navBtnActive
      : style.mobileNavBtn;

  return (
    <div className={style.buttonWrapper}>
      <Link to="/transactions/history/expenses">
        <button
          className={getButtonStyle(
            'expense',
            '/react-redux-project-01/transactions/history/expenses'
          )}
          onClick={() => handleButtonAndToggleMenu('expense')}
        >
          {isMobileScreen ? 'All Expense' : 'Expense'}
        </button>
      </Link>
      <Link to="/transactions/history/incomes">
        <button
          className={getButtonStyle(
            'income',
            '/react-redux-project-01/transactions/history/incomes'
          )}
          onClick={() => handleButtonAndToggleMenu('income')}
        >
          {isMobileScreen ? 'All Incomes' : 'Incomes'}
        </button>
      </Link>
    </div>
  );
};

export default TransactionsHistoryNav;
