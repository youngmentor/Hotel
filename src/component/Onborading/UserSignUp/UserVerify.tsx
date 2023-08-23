import React, { useState, useEffect } from 'react';
import { Params, useNavigate, useParams, } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { verifyUser } from '../../APIS/Mutation';

const UserVerify: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<Params>();

  const [state, setState] = useState<boolean>(false);

  const { mutate, isLoading, isError, isSuccess, data } = useMutation(verifyUser, {
    onSuccess: (data) => {
      setState(!state);
      setTimeout(() => {
        navigate('/alllogin/login');
      }, 3000);
      console.log(data)
    },
  });
  console.log(data)
  useEffect(() => {
  console.log(data)
  mutate(id);
  }, [mutate]);

  const style = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  };

  return (
    <div style={style} className='verify'>
      {isLoading ? <h1>Please Wait...</h1> : isError ? <h1>Error occurred.</h1> : isSuccess ? <h1>Your verification was successful</h1> : null}
    </div>
  );
};

export default UserVerify;
