import './Landing4.css'
// import HotelData from './HotelData'
import { useQuery } from '@tanstack/react-query'
import {fourStarRoom } from '../../APIS/query'


const Landing4: React.FC = () => {

    const {data} =useQuery(['luxuryroom'], fourStarRoom,{
        onSuccess: ()=>{

        }
    })
    // console.log(data?.data?.data)
    const starRoom = data?.data?.data
    return (
        <div className='Landing4Main'>
            <div className='Landing4Heading'>
                <h3>Popular 4 star Room the City</h3>
            </div>
            <div className='Landing4Card'>
                {
                    starRoom?.map((i: any) => (
                        <div key={i.id} className='Landing4CardWrap'>
                            <img src={i.image} alt='Landing4Img' className='Landing4HotelImg' />
                            <div className='Landing4Details'>
                                <p>Price: {i.price}</p>
                                <p>Desc: {i.roomDescription}</p>
                            </div>
                            <button>Book Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Landing4