import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Resizer from 'react-image-file-resizer';
import Loader from '../../Loader/Loader';
import { selectUser } from '../../../redux/User/userSlice';
import {
  changeUserAvatar,
  deleteUserAvatar,
} from '../../../redux/User/operations';
import { useIsLoading } from 'hooks';
import { firstLetter } from '../../../js/firstLetter';
import { takeId } from '../../../js/takeId';
import style from './UserSetsCard.module.css';

const resizeFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'file'
    );
  });

export const UserSetsCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, avatarUrl } = useSelector(selectUser);
  const fileInput = useRef(null);

  const customDispatch = useIsLoading();
  const noAvatar = avatarUrl === null;

  const handleUploadAvatar = async e => {
    const file = e.target.files[0];
    if (!file) return;
    const image = await resizeFile(file);
    customDispatch(changeUserAvatar, image, setIsLoading);
  };

  const handleRedirectClick = () => {
    fileInput.current.click();
  };

  const handleDeletePhoto = () => {
    const id = takeId(avatarUrl);

    customDispatch(deleteUserAvatar, id, setIsLoading);
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.photoWrapper}>
        {noAvatar && !isLoading && (
          <p className={style.text}>{firstLetter(name)}</p>
        )}
        {!noAvatar && !isLoading && (
          <img
            className={style.photo}
            src={avatarUrl}
            alt="user avatar"
            width={150}
          />
        )}
        {isLoading && (
          <Loader className="userIsLoading" width="60" height="60" />
        )}
        <input
          ref={fileInput}
          className={style.input}
          onChange={handleUploadAvatar}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>

      <div className={style.btnWrapper}>
        <button
          className={style.button}
          onClick={handleRedirectClick}
          disabled={isLoading}
        >
          Upload new photo
        </button>
        <button
          className={style.button}
          onClick={handleDeletePhoto}
          disabled={noAvatar || isLoading}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
