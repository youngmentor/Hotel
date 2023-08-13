import axios from "axios"
const { VITE_ENDPOINT } = import.meta.env;
const { VITE_TOKEN } = import.meta.env;

export const getAdmin = async () => {
    const token = localStorage.getItem(VITE_TOKEN)
    return await axios.get(`${VITE_ENDPOINT}/manager/${token}`)
};
export const getAllRoom = async () => {
    return await axios.get(``)
};
export const getCheapRoom = async () => {
    return await axios.get(``)
};
export const getLuxuryRoom = async () => {
    return await axios.get(``)
};
export const getAllHotel = async (id: any) => {
    console.log(id)
    return await axios.get(`${VITE_ENDPOINT}/hotel/hotels/${id}`)
};