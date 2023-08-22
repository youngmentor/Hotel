import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"
import { getOneHotelRooms } from "../../APIS/query"


const OneHotelRoom = () => {
    const { hotelId } = useParams()
    const { data } = useQuery(['getOneHotelRooms', hotelId], getOneHotelRooms, {
        onSuccess: () => {
        }

    })
    // console.log(hotelId)
    // console.log(data?.data?.data?.Rooms)
    const oneHotelRoom = data?.data?.data?.Rooms
    return (
        <div>
            <div className='AllRoomWrap'>
                {
                    oneHotelRoom?.map((i: any) =>
                    (
                        <Link className="AllRooms_Card" key={i.id} to={`/detail/${i.id}`}>
                            <img src={i.image} className='All_Rooms_Image' />
                            <div className='All_Rooms-Detail'>
                                <p>Room Price: {i.price} </p>
                                <p>Room Number: {i.roomNumber}</p>
                                <p>Room Hotel: {i.hotelname}</p>
                                {
                                    i.booked ? "booked" : "Available"
                                }
                            </div>
                            <button>Book Now</button>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}
export default OneHotelRoom