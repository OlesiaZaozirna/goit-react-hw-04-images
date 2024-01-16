import { BallTriangle } from "react-loader-spinner";
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.Backdrop}>
      <BallTriangle
        color="#2E8B57"
        height={300}
        width={300}
        radius={5}
       
      />
    </div>
  );
};

export default Loader;