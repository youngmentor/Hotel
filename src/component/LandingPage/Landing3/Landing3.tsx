import './Landing3.css'
import { useNavigate } from 'react-router-dom'
import { getAllRoom } from '../../APIS/query'
import { useQuery } from '@tanstack/react-query'
import Skeleton from '../../../SkeletonLoading/Skeleton'

const Landing3: React.FC = () => {
    const navigate = useNavigate()

    const { data, isLoading } = useQuery(['getallroom'], getAllRoom, {
        onSuccess: () => {

        }
    })
    // console.log(data?.data?.data)
    const AllRoom = data?.data?.data?.slice(0, 9)
    // const AllRoom: MyObject[] = myArray.slice(0, 9);
    return (
        <div className="Landing3Main">
            <div className='Landing3Heading'>
                <h3>Pick a rooms from around the wolrd</h3>
            </div>
            {
                isLoading ? (
                    <Skeleton />
                ) : (
                    <div className="Landing3MainWrap">
                        {AllRoom?.length === 0 ? (
                            "No room is available for this category"
                        ) : (
                            AllRoom?.map((i: any) => (
                                <div key={i.id} className='Landing4CardWrap'>
                                    <img src={i.image} alt='Landing4Img' className='Landing4HotelImg' />
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
                        )
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Landing3