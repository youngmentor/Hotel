import axios from 'axios';
// import { MutationFunction } from 'react-query';
// import { SignUpForm } from './TypeChecks';
export const fetchSearchResults = async (data: string | undefined) => {
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/hotel/search`, { searchValue: data });
};
export const verifyAdmin = async (data: string | undefined) => {
  console.log(data)
  return await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/manager/verify/${data}`);
};
export const verifyUser = async (data: any) => {
  const {id}= data
  return await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/user/verify/${id}`);
};
export const adminForgotPassword = async (email: string) => {
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/manager/forgotten`, { email })
};

export const resetAdminPassword = async (data: {id: string | undefined, password: string}) => {
  const {id, password} = data
  return await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/manager/change/${id}` ,{password: password})
};
export const adminSignUp = async (data: any) => {
  // console.log(data)
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/manager/register`, data)
};
export const userSignUp = async (data: any) => {
  console.log(data)
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/user/register`, data)
};
export const adminLogin = async (data: any) => {
  console.log(data)
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/manager/login`, data)
}
export const userLogin = async () => {
  return await axios.post(``)
}