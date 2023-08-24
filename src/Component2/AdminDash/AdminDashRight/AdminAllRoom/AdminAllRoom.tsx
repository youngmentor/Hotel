import { useQuery } from "@tanstack/react-query";
import { getOneAdminAllRoom } from "../../../../component/APIS/query";
import { Link } from "react-router-dom";
import './AdminAllRoom.css'
const AdminAllRoom = ({ value }: { value: any }) => {

    const { data } = useQuery(['getoneAdminRoom', value?.id], getOneAdminAllRoom, {
        onSuccess: () => {
        }
    });
  
    const oneHotelRoom = data?.data?.data
    // console.log(data?.data?.data)
    return (
        <div className="AdminAllRooMain">
            
            <div className='AdminAllRoomWrap'>
            
                {
                    oneHotelRoom?.map((i: any) =>
                    (
                        <Link className="AdminAllRooms_Card" key={i.id} to={`/admindash/updateroom/${i.id}`}>
                            <img src={i?.image} className='All_Rooms_Image' />
                            <div className='All_Rooms-Detail'>
                                <p>Room Price: {i?.price} </p>
                                <p>Room Number: {i?.roomNumber}</p>
                                <p>Room Hotel: {i?.hotelname}</p>
                                {
                                    i.booked ? "booked" : "Available"
                                }
                            </div>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}
export default AdminAllRoom