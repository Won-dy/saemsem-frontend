import { useLocation } from 'react-router-dom';

const MainHeader = () => {
  const location = useLocation();

  if (location.pathname.includes('login') || location.pathname.includes('error')) return null;

  return <div id='main-header'>Main Header</div>;
};

export default MainHeader;
