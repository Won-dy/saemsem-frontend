import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainHeader from './common/components/mainHeader/MainHeader';
import GNB from './common/components/gnb/GNB';
import Home from './pages/home/Home';
import { MAIN_HEADER_HEIGHT } from './common/constant/Style';

function App() {
  const [isFullPage, setFullPage] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  useEffect(() => {
    const newPath = window.location.pathname;
    setFullPage(newPath.includes('login') || newPath.includes('error'));
    if (newPath !== currentPath) {
      setCurrentPath(newPath);
    }
  }, [currentPath]);

  return (
    <div className='App'>
      <BrowserRouter>
        <MainHeader />
        <div
          id='main-body'
          style={{ height: isFullPage ? '100%' : `calc(100% - ${MAIN_HEADER_HEIGHT})` }}
        >
          <GNB />
          <div id={isFullPage ? 'main-page-wrap' : 'main-content-wrap'}>
            <Routes>
              <Route path='/' element={<Navigate to='/login' replace />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<>Login</>} />
              <Route path='/login/join' element={<>Join</>} />
              <Route path='/error/404' element={<>Not Found</>} />
              <Route path='*' element={<Navigate to='/error/404' />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
