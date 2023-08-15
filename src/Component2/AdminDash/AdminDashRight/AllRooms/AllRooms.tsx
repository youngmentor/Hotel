import RoomData from '../../../../component/LandingPage/HomeData'
import './AllRooms.css'
import React, { useState } from 'react';
import AddRooms from '../AddRooms/AddRooms';
import { useParams } from 'react-router-dom';
const AllRooms: React.FC = () => {
    const { adminId, hotelId } = useParams()
    const [addRoom, setAddRoom] = useState<boolean>(false)
    const allRoom = (): void => {
        setAddRoom(!addRoom)
    }
    return (
        <div className="AllRooms_Main">
            {!addRoom &&
                <div className="AllRooms_Main_Wrap">
                     <div className='AddRoomBttDiv'>
                        <button onClick={allRoom} className='AddRoomButton'>Add Room</button>
                    </div>
                    <div className='AllRoomWrap'>
                        {
                            RoomData.map((i) =>
                            (
                                <div className="AllRooms_Card">
                                    <img src={i.Avatar} className='All_Rooms_Image' />
                                    <div className='AddRooms-Detail'>
                                        <p>Hotel Name: {i.state} </p>
                                        <p>Hotel city: {i.city}</p>
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