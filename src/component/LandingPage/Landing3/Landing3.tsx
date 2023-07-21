import './Landing3.css'
import RoomData from '../HomeData'
const Landing3: React.FC = () => {
    return (
        <div className="Landing3Main">
            <div className='Landing3Heading'>
                <h3>Pick from our top rooms from around the wolrd</h3>
            </div>
            <div className="Landing3MainWrap">
                {
                    RoomData.map((i) => (
                        <div className='Landing3RoomCard'>
                            <img src={i.Avatar} className='LandingRoomImage' />
                            <p>{i.desc}</p>
                            <p>${i.price}</p>
                            <p>{i.state}</p>
                            <p>{i.city}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Landing3