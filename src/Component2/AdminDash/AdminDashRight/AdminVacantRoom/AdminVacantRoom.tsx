import { useQuery } from '@tanstack/react-query';
import { getOneAdminVacantRoom } from '../../../../component/APIS/query';
import './AdminVacantRoom.css'
import { Link } from 'react-router-dom';
const AdminVacantRoom = ({value}: {value: any}) => {
    const {data: vacantRoomData} = useQuery(['getoneVacnatRoom', value?.id], getOneAdminVacantRoom,{
        onSuccess: ()=>{
        }
    })
   const allvacantRoom = vacantRoomData?.data?.data
//    console.log(allvacantRoom)
    return (
        <div  className="AdminAllRooMain">
                     <div className='AdminAllRoomWrap'>
            
            {
                allvacantRoom?.map((i: any) =>
                (
                    <Link className="AdminAllRooms_Card" key={i.id} to={`/admindash/updateroom/${i.id}`}>
                        <img src={i?.image} className='All_Rooms_Image' />
                        <div className='All_Rooms-Detail'>
                            <p>Room Price: {i?.price} </p>
                            <p>Room Number: {i?.roomNumber}</p>
                            <p>Room Hotel: {i?.hotelname}</p>
                            <p>This Room Is: {i.booked ? "booked" : "Available"}</p>                          
                        </div>
                    </Link>
                )
                )
            }
        </div>
        </div>
    )
}
export default AdminVacantRoom