import React from 'react'
// import Loader from './Loader.svg'
import './Loading.css'
const Loading: React.FC = () => {
  return (
    <div className='loader'>
        {/* <img src={Loader}/> */}
        {/* <p>Welcome to Room where we serve you better</p> */}
        <img src='/RoomLogo-removebg-preview.png' alt='LoadingNewRoomLogo' className='LoadingLogo'/>
    </div>
  )
}

export default Loading