import './Landing4.css'
// import HotelData from './HotelData'
import { useQuery } from '@tanstack/react-query'
import { fourStarRoom } from '../../APIS/query'
import { useNavigate } from 'react-router-dom'


const Landing4: React.FC = () => {
    const navigate = useNavigate()
    const { data, isLoading } = useQuery(['luxuryroom'], fourStarRoom, {
        onSuccess: () => {

        }
    })
    // console.log(data?.data?.data)
    const starRoom = data?.data?.data
    return (
        <div className='Landing4Main'>
            <div className='Landing4Heading'>
                <h3>Popular 4 star Room the City</h3>
            </div>
            {
                isLoading ? (
                    "Loading rooms ..."
                ) : (
                    <div className='Landing4Card'>
                        {
                            starRoom?.map((i: any) => (
                                <div key={i.id} className='Landing4CardWrap'>
                                    <img src={i.image} alt='Landing4Img' className='Landing4HotelImg' />
                                    <div className='Landing4Details'>
                                        <p>Price: {i.price}</p>
                                        {/* <p>Desc: {i.roomDescription}</p> */}
                                        <p>Location: {i.address}</p>
                                    </div>
                                    <button onClick={(() => {
                                        navigate(`detail/${i.id}`)
                                        localStorage.setItem('roomid', i.id)
                                        console.log(i.id)
                                    })} className='BookNow_Button'>Book Now</button>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}
export default Landing4