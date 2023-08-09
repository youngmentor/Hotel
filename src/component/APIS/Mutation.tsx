import axios from 'axios';
// import { MutationFunction } from 'react-query';

export const fetchSearchResults = async (data: string | undefined) => {
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/hotel/search`, { searchValue: data });
};
export const verifyAdmin = async (data: string | undefined) => {
console.log(data)
  return await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/manager/verify/${data}`);
};
export const verifyUser = async (id: any) => {
  return  await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/user/verify/${id}`);
  
};
export const adminForgotPassword = async (email: string) => {
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/manager/forgotten`, { email })
};

export const resetAdminPassword = async (data:any) => {
  console.log(data)
  return await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/manager/change/${data}`, {data})
}
export const adminSignUp = async (data: any)=>{
  console.log(data)
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1//manager/register`, {data})
}
export const userSignUp = async (data: any)=>{
  console.log(data)
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1//user/register`, {data})
}