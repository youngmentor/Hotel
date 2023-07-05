import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Popular from './Popular/PopularHotel';
import AllRooms from './AllRooms/AllRooms';
const Home: React.FC = () => {
  return (
    <div className='HomeMainPage'>
      <Header />
      <div className='HomeMainPageWrap'>
        <AllRooms />
        <Popular />
      </div>
    </div>
  );
};

export default Home;
