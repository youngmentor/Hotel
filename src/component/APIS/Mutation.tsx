import axios from 'axios';

// export const BASE_URL = `https://hotel-api-7wlm.onrender.com/api/v1/manager/details/`;

// export const Axios = axios.create({
//   baseURL: BASE_URL,
// });

export const getAdminDetails = async (adminId: any) => {
  const response = await axios.get(`https://hotel-api-7wlm.onrender.com/api/v1/manager/details/${adminId}`);
  return response.data;
};
