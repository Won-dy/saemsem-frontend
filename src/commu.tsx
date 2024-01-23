import { useEffect, useState } from 'react';

const commu = () => {
  const a = 1;
  const [id, setId] = useState('');

  useEffect(() => {
    console.log('[ㅎㅇ] id = ', id);
  }, []);

  useEffect(() => {
    console.log('[ㅎㅇ] id = ', id);
  }, [id]);

  return (
    <div>
      <button type='button'>로그인</button>
      <button type='button'>{a}</button>
    </div>
  );
};

export default commu;
