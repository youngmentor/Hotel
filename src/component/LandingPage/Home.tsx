import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {

  const navigate= useNavigate()
  return (
    <div className='HomeMainPage'>
      <p>this site is under development sign up to join our waitlist a<br/>nd enjoy up to 50% discount on a booking</p>
      <button  onClick={() => navigate("/login")}>login</button>
      <button  onClick={() => navigate("/signup")}>sign up</button>
    </div>
  );
};

export default Home;
