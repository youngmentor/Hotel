import { useQuery } from '@tanstack/react-query'
import './Landing5.css'
import { getCheapRoom } from '../../APIS/query'
// import ButtonLoading from '../../../ButtonLoader/ButtonLoader'
import { useNavigate } from 'react-router-dom'
import Skeleton from '../../../SkeletonLoading/Skeleton'

const Landing5: React.FC = () => {
    const navigate = useNavigate()
    const { data, isLoading, } = useQuery(['getcheaproom'], getCheapRoom, {
        onSuccess: () => {

        }
    })
    // console.log(data?.data?.data)
    const cheapRoom = data?.data?.data?.slice(0, 9)
    return (
        <div className='CheapRoom_Main'>
            <div className='CheapRoom_Main_Wrap'>
                <div className='CheapRoomHeading'>
                    <h3>Perks from our cheap Room</h3>
                </div>
                {
                    isLoading ? (
                        <Skeleton/>
                    ) : (
                        <div className='Landing4Card'>
                            {
                                cheapRoom?.map((i: any) => (
                                    <div className="CheapRoom_Card" key={i.id}>
                                        <img src={i?.image} className='CheapRoom_Img' />
                                        <div className='CheapRoom_Details'>
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
        </div>
    )
}

export default Landing5 