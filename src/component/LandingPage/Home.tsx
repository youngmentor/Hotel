import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../Header/Header'
import Landing1 from './Landing1/Landing1';
import Loading from '../../LoadingState/Loading';
const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // setTimeout(() => {
      setLoading(false)
    // }, 3000)
  });
  return (
    <div className='HomeMainPage'>
      {
        loading ? <Loading /> :
          <div className='HomeMainWrap'>
            <Header />
            <div className='HomeMainPageWrap'>
              <Landing1 />
            </div>
          </div>
      }
    </div>
  );
};

export default Home;
