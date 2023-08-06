import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation} from 'react-query';
import axios from 'axios';

interface Params {
  id: string;
  [key: string]: string | undefined;
}

const AdminVerify: React.FC = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  const [state, setState] = useState<boolean>(false);

  const verifyAdmin = async () => {
    const response = await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/manager/verify/${id}`);
    return response.data; 
  };

  const { mutate, isLoading, isError, isSuccess } = useMutation(verifyAdmin, {
    onSuccess: () => {
      setState(!state);
      setTimeout(() => {
        navigate('/alllogin/adminlogin');
      }, 3000);
    },
  });

  useEffect(() => {
    mutate();
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

export default AdminVerify;
