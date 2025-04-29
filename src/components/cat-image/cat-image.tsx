import './cat-image.scss';
import { useCat } from '../../context/cat-context';
import Loader from '../common/loader/loader';

const CatImage = () => {
  const { cat, isLoading } = useCat();

  return (
    <div className="image-container">
      {isLoading ? <Loader /> : <img src={cat} alt="A random cat" className="cat" />}
    </div>
  );
};

export default CatImage;
