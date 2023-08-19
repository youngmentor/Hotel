import './AllRooms.css'
import React, { useState } from 'react';
import AddRooms from '../AddRooms/AddRooms';
import { useParams } from 'react-router-dom';
import { useQuery} from '@tanstack/react-query';
import { getOneHotelRooms } from '../../../../component/APIS/query';
const AllRooms: React.FC = () => {
    const { adminId, hotelId,  } = useParams()
    const [addRoom, setAddRoom] = useState<boolean>(false)
    const allRoom = (): void => {
        setAddRoom(!addRoom)
    }
    const {data} =useQuery(['getOneHotelRooms', hotelId], getOneHotelRooms,{
        onSuccess: ()=>{
        }
       
    })
    // console.log(hotelId)
    // console.log(data?.data?.data?.Rooms)
    const oneHotelRoom = data?.data?.data?.Rooms
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
                                <div className="AllRooms_Card" key={i.id}>
                                    <img src={i.image} className='All_Rooms_Image' />
                                    <div className='All_Rooms-Detail'>
                                        <p>Hotel Name: {i.price} </p>
                                        <p>Hotel city: {i.roomNumber}</p>
                                        {
                                            i.booked !? "booked" : "Available"
                                        }
                                    </div>
                                </div>
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