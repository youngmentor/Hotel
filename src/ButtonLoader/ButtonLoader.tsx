import React from 'react'
import ButtonLoader from './ButtonLoader.svg'
import './ButtonLoader.css'
const ButtonLoading: React.FC = () => {
  return (
    <div className='load'>
        <img src={ButtonLoader} alt="loader" className='ButtonLoadingState'/>
    </div>
  )
}

export default ButtonLoading