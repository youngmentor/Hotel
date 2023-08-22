import axios from "axios"
const { VITE_ENDPOINT } = import.meta.env;
const { VITE_TOKEN } = import.meta.env;

export const getAdmin = async () => {
    const token = localStorage.getItem(VITE_TOKEN)
    return await axios.get(`${VITE_ENDPOINT}/manager/${token}`)
};
export const getOneRoom = async (data: any) => {
    // console.log(data)
    // console.log(data?.queryKey[1])
    return await axios.get(`${VITE_ENDPOINT}/room/${data?.queryKey[1]}`)
};
export const getOneAdminAllRoom = async (data: any) => {
    // console.log(data?.queryKey[1])
    return await axios.get(`${VITE_ENDPOINT}/room/admin/${data?.queryKey[1]}`)
};
export const getCheapRoom = async (data: any) => {
    // console.log(data)
    return await axios.get(`${VITE_ENDPOINT}/room/cheaprooms`, data)
};
export const getLuxuryRoom = async (data: any) => {
    return await axios.get(`${VITE_ENDPOINT}/room/luxury`, data)
};
export const fourStarRoom = async (data: any)=>{
    // console.log(data)
    return await axios.get(`${VITE_ENDPOINT}/room/starrooms`, data)
}
export const getAllHotel = async (data: any) => {
    // console.log(data?.queryKey[1])
    return await axios.get(`${VITE_ENDPOINT}/manager/hotels/${data?.queryKey[1]}`)
};
export const getOneHotelRooms = async (data: any)=>{
    // console.log(data?.queryKey[1])
    return await axios.get(`${VITE_ENDPOINT}/hotel/hotels/${data?.queryKey[1]}`)
}
export const getOneAdminVacantRoom = async (data: any) => {
    // console.log(data?.queryKey[1])
    return await axios.get(`${VITE_ENDPOINT}/room/vacant/${data?.queryKey[1]}`)
};
export const getAbujaHotel = async (data: any) => {
    // console.log(data)
    return await axios.get(`${VITE_ENDPOINT}/hotel/abuja/`, data)
};
export const getLagosHotel = async (data: any) => {
    // console.log(data)
    return await axios.get(`${VITE_ENDPOINT}/hotel/lagos/`, data)
};
export const getKanoHotel = async (data: any) => {
    // console.log(data)
    return await axios.get(`${VITE_ENDPOINT}/hotel/kano/`, data)
};
export const getCalabarHotel = async (data: any) => {
    // console.log(data)
    return await axios.get(`${VITE_ENDPOINT}/hotel/calabar/`, data)
};
// export const getIbadanHotel = async (data: any) => {
//     console.log(data)
//     return await axios.get(`${VITE_ENDPOINT}/hotel/ibadan/`, data)
// };
// export const getKwaraHotel = async (data: any) => {
//     console.log(data)
//     return await axios.get(`${VITE_ENDPOINT}/hotel/kwara/`, data)
// };
