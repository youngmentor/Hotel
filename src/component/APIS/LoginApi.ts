
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

const Api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your API endpoint
});

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await Api.post('https://hotel-api-7wlm.onrender.com/api/v1/manager/login', data);
  return response.data;
};
