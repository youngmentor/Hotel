
import axios from 'axios';

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