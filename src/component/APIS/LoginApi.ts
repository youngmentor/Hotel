
import axios, { AxiosResponse } from 'axios';
import { clearAdmin } from '../../Redux/Features';
// import { useNavigate } from 'react-router-dom';
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    message: string;
  };
}

const adminApi = axios.create({
  baseURL: 'https://hotel-api-7wlm.onrender.com/api/v1/manager/login',
});

export const adminLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await adminApi.post('https://hotel-api-7wlm.onrender.com/api/v1/manager/login', data);
  return response.data;
};

export interface userLoginRequest {
  email: string;
  password: string;
}

export interface userLoginResponse {
  status: number;
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
    message: string;
  };
};

const userApi = axios.create({
  baseURL: 'https://hotel-api-7wlm.onrender.com/api/v1//user/login',
});

export const userLogin = async (data: userLoginRequest): Promise<userLoginResponse> => {
  const response = await userApi.post('https://hotel-api-7wlm.onrender.com/api/v1//user/login', data);
  return response.data;
};


import { Dispatch } from 'redux';

export const logOut = async (user: { id: string } | null, dispatch: Dispatch<any>) => {
  try {
    if (!user) {
      throw new Error('User is not defined.');
    }

    const res: AxiosResponse<any> = await axios.post(
      `https://hotel-api-7wlm.onrender.com/api/v1/manager/logout/${user.id}`
    );
    console.log(user.id)
    console.log(res.data);

    if (res.status === 200) {
      dispatch(clearAdmin());
    }

    if (res.status === 201) {
      // navigate('/loginuser/login');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

// Assuming you have defined the 'clearUser' action creator function.
