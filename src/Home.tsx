import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {

  const navigate= useNavigate()
  return (
    <>
      <h1>hello world</h1>
      <button  onClick={() => navigate("/login")}>login</button>
      <button  onClick={() => navigate("/signup")}>sign up</button>
    </>
  );
};

export default Home;
