// import { useState } from "react"
import RoomData from "../HomeData"
import './AllPopularHotel.css'
import { Link } from "react-router-dom"
type RoomDetails = {
    id: number,
    Avatar: string,
    name: string,
    desc: string,
    price: number,
    state: string,
    city: string,
}
const LagosHotel: React.FC = () => {
    // const [room, setRoom] = useState<RoomDetails>()
    const lagosRooms: RoomDetails[] = RoomData.filter((room) => room.state === "Lagos");


    return (
        <div className="AllHotelsMainCard">
            <div className="AllHotelsMainCardWrap">
                {
                    lagosRooms.map((room) => (
                        <Link key={room.id} className="AllHotelContent" to={`/detail/${room.id}`}>
                            <div className="AllHotelImageDiv">
                                <img src={room.Avatar} className="AllHotelsImg"/>
                            </div>
                            <div className="AllHotelDetails">
                                <h4>{room.name}</h4>
                                <p>{room.desc}</p>
                                <p>{room.city}</p>
                                <p>{room.price}</p>
                            </div>
                            <button className="AllHotelsButton" >Book Now</button>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
export default LagosHotel