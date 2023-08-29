const { VITE_TOKEN_USER } = import.meta.env;
import { useQuery } from "@tanstack/react-query"
import { getUserHistory } from "../../../../component/APIS/query"
import './UserHistory.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UserHistory = ({ value }: { value: any }) => {
    const navigate = useNavigate()
    const userId: any = value?.id
    const { data, isLoading } = useQuery(['getuserhistory', userId], getUserHistory, {
        onSuccess: () => {
            // console.log(data?.data?.data)
        }
    })

    const userBookingHistory = data?.data?.data
    useEffect(() => {
        // console.log(localStorage.getItem(VITE_TOKEN))
        if (localStorage.getItem(VITE_TOKEN_USER) === null) {
            navigate('/alllogin/login')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please login or create account to access the dashboard',
                showConfirmButton: false,
                timer: 4000
            })
        }
    })
    return (
        <div className="UserHistoryMain">
            <p>This is my Booking istory</p>
            {
                isLoading ? <p>Loading Booking....</p> :
                    <div className="UserHistoryWrap">
                        {
                            userBookingHistory?.map((i: any) => (
                                <div key={i?.id} className="UserHistoryCard">
                                    <img src={i?.Room?.image} className="UserHistoryRoomImg" />
                                    <p>Address: {i?.Room?.address}</p>
                                    <p>Hotel Name: {i?.Room?.hotelname}</p>
                                    <p>Price: {i?.amountToPay}</p>
                                    <p>Room Number: {i?.roomNumber}</p>
                                    <p>Check-In: {i?.checkIn} </p>
                                    <p>Check-Out: {i?.checkOut} </p>
                                </div>
                            ))
                        }
                    </div>
            }

        </div>
    )
}

export default UserHistory