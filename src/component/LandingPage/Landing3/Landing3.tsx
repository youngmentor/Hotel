import './Landing3.css'
import RoomData from '../HomeData'
import { useNavigate } from 'react-router-dom'
const Landing3: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="Landing3Main">
            <div className='Landing3Heading'>
                <h3>Pick from our top rooms from around the wolrd</h3>
            </div>
            <div className="Landing3MainWrap">
                {
                    RoomData.map((i) => (
                        <div className='Landing3RoomCard' key={i.id} onClick={() => navigate(`/detail/${i.id}`)}>
                            <img src={i.Avatar} className='LandingRoomImage' />
                            <div className='LandingRoomDetails'>
                                <p>{i.desc}</p>
                                <p>${i.price}</p>
                                <p>{i.state}</p>
                                <p>{i.city}</p>
                                <div className='Landing3RoomButton'>
                                    <button onClick={() => navigate(`/detail/${i.id}`)} >Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Landing3