import './AllRooms.css'
import  { useState } from 'react';
import AddRooms from '../AddRooms/AddRooms';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOneHotelRooms } from '../../../../component/APIS/query';
const AllRooms = () => {
    const { adminId, hotelId } = useParams()
    const [addRoom, setAddRoom] = useState<boolean>(false)
    const allRoom = (): void => {
        setAddRoom(!addRoom)
    }
    const { data } = useQuery(['getOneHotelRooms', hotelId], getOneHotelRooms, {
        onSuccess: () => {
        }

    })
    // const { data: oneHotel } = useQuery(['getoneAdminRoom', value?.id], getOneAdminAllRoom, {
    //     onSuccess: () => {
    //     }
    // });
    // console.log(hotelId)
    // console.log(data?.data?.data)
    const oneHotelRoom = data?.data?.data?.Room
    return (
        <div className="AllRooms_Main">
            {!addRoom &&
                <div className="AllRooms_Main_Wrap">
                    <div className='AddRoomBttDiv'>
                        <button onClick={allRoom} className='AddRoomButton'>Add Room</button>
                    </div>
                    <div className='AllRoomWrap'>
                        {
                            oneHotelRoom?.map((i: any) =>
                            (
                                <Link className="AllRooms_Card" key={i.id} to={`/admindash/updateroom/${i.id}`}>
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
                </div>}
            {addRoom && <AddRooms adminId={adminId} hotelId={hotelId} allRoom={allRoom} />}
        </div>
    )
}
export default AllRooms