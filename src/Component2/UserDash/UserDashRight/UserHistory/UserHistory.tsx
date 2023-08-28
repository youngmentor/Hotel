
import { useQuery } from "@tanstack/react-query"
import { getUserHistory } from "../../../../component/APIS/query"
import './UserHistory.css'
const UserHistory = ({ value }: { value: any }) => {

    const userId: any = value?.id
    const { data, isLoading } = useQuery(['getuserhistory', userId], getUserHistory, {
        onSuccess: () => {
            // console.log(data?.data?.data)
        }
    })

    const userBookingHistory = data?.data?.data
// console.log(userBookingHistory)
    return (
        <div className="UserHistoryMain">
            <p>This is my Booking history</p>
            {
                isLoading ? <p>Loading Booking....</p> :
                    <div className="UserHistoryWrap">
                        {
                            userBookingHistory?.map((i: any) => (
                                <div key={i?.id} className="UserHistoryCard">
                                    <img src={i?.Room?.image} className="UserHistoryRoomImg"/>
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