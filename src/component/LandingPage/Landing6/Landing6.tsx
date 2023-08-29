import { useQuery } from '@tanstack/react-query'
import './Landing6.css'
import { getLuxuryRoom } from '../../APIS/query'
import { useNavigate } from 'react-router-dom'
// import RoomData from '../HomeData'
const Landing6: React.FC = () => {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery([''], getLuxuryRoom, {})
    // console.log(data?.data?.data)
    const luxuryRoom = data?.data?.data
    return (
        <div className='Landing4Main'>
            <div className='Landing4Heading'>
                <h3>Perks from our Expensive/Luxury Room</h3>
            </div>
            {
                isLoading ? (
                    'Loading Rooms ...'
                ) : (
                    <div className='Landing4Card'>
                        {
                            luxuryRoom?.map((i: any) => (
                                <div key={i?.id} className='Landing4CardWrap'>
                                    <img src={i?.image} alt='Landing4Img' className='Landing4HotelImg' />
                                    <div className='Landing4Details'>
                                        <p className='HotelName'> {i?.hotelname}</p>
                                        <p>₦ {i?.price}</p>
                                        <p> {i?.address}</p>
                                    </div>
                                    <button onClick={(() => navigate(`detail/${i.id}`))} className='BookNow_Button'>Book Now</button>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Landing6