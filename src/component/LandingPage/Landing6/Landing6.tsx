import { useQuery } from '@tanstack/react-query'
import './Landing6.css'
import { getLuxuryRoom } from '../../APIS/query'
import { useNavigate } from 'react-router-dom'
import Skeleton from '../../../SkeletonLoading/Skeleton'
// import RoomData from '../HomeData'
const Landing6: React.FC = () => {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery([''], getLuxuryRoom, {})
    // console.log(data?.data?.data)
    const luxuryRoom = data?.data?.data?.slice(0, 9)
    return (
        <div className='Landing4Main'>
            <div className='Landing4Heading'>
                <h3>Perks from our Expensive/Luxury Room</h3>
            </div>
            {
                isLoading ? (
                    <Skeleton />
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
                                    <button onClick={(() => {
                                        navigate(`detail/${i.id}`)
                                        localStorage.setItem('roomid', i.id)
                                        console.log(i.id)
                                    })} className='BookNow_Button'>
                                        Book Now
                                    </button>
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