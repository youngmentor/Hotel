
import { useQuery } from "@tanstack/react-query"
import { getUserHistory } from "../../../../component/APIS/query"

const UserHistory= ({value}: {value: any}) => {
   
    const userId: any = value?.data?.data?.id
    const { data, isLoading } = useQuery(['getuserhistory', userId], getUserHistory, {
        onSuccess: () => {
            // console.log(data?.data?.data)
        }
    })
    
    const userBookingHistory = data?.data?.data?.[0]?.Room
    return (
        <div>
            <h1>This is my Booking history</h1>
            <p>hello</p>
            {isLoading ? (
                <p>Loading user History ...</p>
            ) : (
                <div>
                    <img src={userBookingHistory?.image} />
                    <p>Address: {userBookingHistory?.address}</p>
                    <p>Hotel Name: {userBookingHistory?.hotelname}</p>
                    <p>Price: {userBookingHistory?.price}</p>
                    <p>Room Number: {userBookingHistory?.roomNumber}</p>
                </div>
            )}
        </div>
    )
}

export default UserHistory