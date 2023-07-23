import React,{useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const UserVerify: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState<boolean>(false)

    const handleSubmit = async () => {
        const response = await axios.post(`${id}`)
        console.log(response)
        setState(true)
        setTimeout(() => {
        response.status === 200 ?  navigate('loginuser/login') : null
        }, 3000);
    }
    useEffect(() => {
      handleSubmit()
    }, [])


    const style = {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
    }
  return (
    <div style={style} className='verify'>
    {!state ? <h1>Please Wait...</h1> :
      <h1>Your verification was sucessful</h1>}
  </div >
  )
}

export default UserVerify