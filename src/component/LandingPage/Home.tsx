import React from 'react';
import './Home.css'
import Header from '../Header/Header'
import Landing1 from './Landing1/Landing1';
const Home: React.FC = () => {
  return (
    <div className='HomeMainPage'>
      <Header />
      <div className='HomeMainPageWrap'>
        {/* <AllRooms /> */}
        <Landing1/>
      </div>
    </div>
  );
};

export default Home;
