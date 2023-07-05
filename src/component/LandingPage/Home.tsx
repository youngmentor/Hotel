import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Header from '../Header/Header';
import Popular from './Popular/PopularHotel';
import AllRooms from './AllRooms/AllRooms';
import Landing1 from './Landing1/Landing1';
const Home: React.FC = () => {

  const navigate = useNavigate()
  return (
    <div className='HomeMainPage'>
      <Header />
      <div className='HomeMainPageWrap'>
        <AllRooms />
        <Popular />
        <div className='HomeBttn'>
          <button onClick={() => navigate("/login")}>login</button>
          <button onClick={() => navigate("/signup")}>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
