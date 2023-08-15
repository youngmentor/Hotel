import { useQuery } from '@tanstack/react-query';
// import RoomData from '../../../../component/LandingPage/HomeData'
import './AllHotels.css'
import { getAllHotel } from '../../../../component/APIS/query';
import { Link } from 'react-router-dom';
const AllHotels = ({value}: { value: any }) => {

    const { data} = useQuery(['getAllHotel', value?.id], getAllHotel, {
   
    }
    )
    // console.log(value?.id)
    return (
        <div className="AllHotels_Main">
            <div className="AllHotels_Main_Wrap">
                {
                    data?.data?.data?.map((Hotel: any) => {
                        return (
                            <div className="AllHotels_Card" key={Hotel.id}>
                                <img src={Hotel.imageId} className='All_Hotels_Image' />
                                <div className='AddHotels-Detail'>
                                    <p>Hotel State: {Hotel.state} </p>
                                    <p>Hotel city: {Hotel.city}</p>
                                </div>
                                <Link to={`/admindash/allrooms/${value?.id}/${Hotel.id}`} className='Add_Room_Button'>
                                   <button>Add Room</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default AllHotels