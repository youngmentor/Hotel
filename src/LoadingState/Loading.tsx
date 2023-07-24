import React from 'react'
import Loader from './Loader.svg'
import './Loading.css'
const Loading: React.FC = () => {
  return (
    <div className='loader'>
        <img src={Loader}/>
        <p>Welcome to Room where we serve you better</p>
    </div>
  )
}

export default Loading