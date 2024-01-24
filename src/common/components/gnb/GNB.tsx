import { useLocation } from 'react-router-dom';
import './gnb.scss';

const GNB = () => {
  const location = useLocation();

  if (location.pathname.includes('login') || location.pathname.includes('error')) return null;

  return (
    <div className='gnb'>
      <div>Menu 1</div>
      <div>Menu 2</div>
      <div>Menu 3</div>
      <div>Menu 4</div>
      <div>Menu 5</div>
    </div>
  );
};

export default GNB;
