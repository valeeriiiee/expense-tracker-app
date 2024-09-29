import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  addCategory,
  deleteCategory,
  editCategory,
} from '../../redux/Category/operations';
import { selectCategories } from '../../redux/Category/categorySlice';
import { Icon } from '../../components/Icon/Icon';
import style from './CategoriesModal.module.css';
import { getTransactions } from '../../redux/Transaction/operations';

export const CategoriesModal = ({ type, transportCategory }) => {
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();
  const ulRef = useRef(null);

  const [categoryName, setCategoryName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmitCategory = e => {
    e.preventDefault();
    if (categoryName.length > 16) {
      toast.error(
        'Category name length must be less than or equal to 16 characters long'
      );
      return;
    }

    if (isEditMode) {
      dispatch(editCategory({ categoryName, categoryId }))
        .unwrap()
        .then(() => {
          dispatch(getTransactions({ type }));
          setIsEditMode(false);
        })
        .catch(error => toast.error('Error editing category'));
    } else {
      dispatch(addCategory({ type, categoryName }))
        .unwrap()
        .then(() => {
          toast.success('New Category added successfully');

          ulRef.current.scrollTo({
            top: ulRef.current.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => toast.error('Error adding category'));
    }
    setCategoryName('');
  };

  const handleInputChange = event => {
    setCategoryName(event.target.value);
  };

  const handleChangeCategory = (id, categoryName) => {
    setCategoryName(categoryName);
    setCategoryId(id);

    setIsEditMode(true);
  };

  const handleGetCategory = item => {
    transportCategory(item);
  };

  const handleDeleteCategory = (id, type) => {
    setIsEditMode(false);
    setIsButtonDisabled(true);

    dispatch(deleteCategory({ id, type }))
      .unwrap()
      .then(() => toast.success('Category deleted successfully'))
      .catch(error => {
        toast.error('Cannot delete category with existing transactions');
      })
      .finally(setIsButtonDisabled(false));
  };
  useEffect(() => {
    if (!isEditMode) {
      setCategoryName('');
    }
  }, [isEditMode]);

  return (
    <div className={style.mainBox}>
      <div className={style.box}>
        <h2 className={style.mainTitle}>
          {type === 'expenses' ? 'Expenses' : 'Incomes'}
        </h2>
        <h3 className={style.title}>All Category</h3>

        <ul className={`${style.listWrapper} scroll scrollB`} ref={ulRef}>
          {categories[type].length === 0 ? (
            <li className={style.noobjects}>
              <p className={style.noobjectsP}>There are no categories</p>
            </li>
          ) : (
            categories[type].map(item => (
              <li className={style.listItem} key={item._id}>
                <p>{item.categoryName}</p>

                <ul className={style.listSVG}>
                  <li className={style.listSVGitem}>
                    <button
                      className={style.buttonSVG}
                      onClick={() => handleGetCategory(item)}
                    >
                      <Icon className={style.icon} name="check" size="16" />
                    </button>
                  </li>
                  <li>
                    <button
                      className={style.buttonSVG}
                      onClick={() =>
                        handleChangeCategory(item._id, item.categoryName)
                      }
                    >
                      <Icon className={style.icon} name="edit" size="16" />
                    </button>
                  </li>
                  <li>
                    <button
                      className={style.buttonSVG}
                      onClick={() => handleDeleteCategory(item._id, type)}
                      disabled={isButtonDisabled}
                    >
                      <Icon className={style.icon} name="trash-bin" size="16" />
                    </button>
                  </li>
                </ul>
              </li>
            ))
          )}
        </ul>
      </div>

      <form className={style.formStyle} onSubmit={handleSubmitCategory}>
        <label className={style.labelCategory} htmlFor="categoryInput">
          {isEditMode ? 'Edit Category' : 'New Category'}
        </label>
        <div className={style.inputBox}>
          <input
            type="text"
            id="categoryInput"
            placeholder="Enter the text"
            className={style.inputCategory}
            onChange={handleInputChange}
            value={categoryName}
          />

          <button
            className={style.subbmitButton}
            type="submit"
            disabled={categoryName.length === 0}
          >
            {isEditMode ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};
