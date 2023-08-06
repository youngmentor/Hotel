import React from 'react'
import ButtonLoader from './ButtonLoader.svg'
import './ButtonLoader.css'
const ButtonLoading: React.FC = () => {
  return (
    <div className='loader'>
        <img src={ButtonLoader} alt="loader" className='ButtonLoader'/>
    </div>
  )
}

export default ButtonLoading