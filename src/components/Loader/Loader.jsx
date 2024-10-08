import { Watch } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = ({ className = 'backdrop', width = '80', height = '80' }) => {
  return (
    <div className={style[className]}>
      <Watch
        visible={true}
        height={height}
        width={width}
        radius="48"
        color="#0ef387"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={style.loader}
      />
    </div>
  );
};

export default Loader;
