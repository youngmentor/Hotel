import axios from 'axios';

export const fetchSearchResults = async (data: string | undefined)=> {
  return await axios.post(`https://hotel-api-7wlm.onrender.com/api/v1/hotel/search`, { searchValue: data});
};

export const verifyAdmin = async (id: any) => {
  const response = await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/manager/verify/${id}`);
  return response.data; 
};
export const verifyUser = async (id: any) => {
  const response = await axios.patch(`https://hotel-api-7wlm.onrender.com/api/v1/user/verify/${id}`);
  return response.data; 
};