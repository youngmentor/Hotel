import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import RoomData from './HomeData'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {

  const navigate = useNavigate()
  return (
    <div className='HomeMainPage'>
      <Header/>
      <div className='HomeMainPageWrap'>
        <div className='HomePageHome'>
          {RoomData.map((item) => (
            <Link className='Prod_Card' key={item.id} to={`/detail/${item.id}`}>
              <img src={item.Avatar} className='Img' />
              <h4 className='ProductName'>{item.name}</h4>
              <p className='Desc_Contain'>{item.desc}</p>
              <div className='ProdPricBttn'>
                <p>${item.price}</p>
                <button className='BookBttn'>Book Now</button>
              </div>
            </Link>
          ))}
        </div>
        <div className='HomeBttn'>
          <button onClick={() => navigate("/login")}>login</button>
          <button onClick={() => navigate("/signup")}>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
