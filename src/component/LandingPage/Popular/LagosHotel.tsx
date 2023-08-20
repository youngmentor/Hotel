import './AllPopularHotel.css'
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getLagosHotel } from "../../APIS/query";

const LagosHotel: React.FC = () => {
    const { data } = useQuery(['getlagoshotel'], getLagosHotel, {
        onSuccess: () => {
            // console.log(data?.data?.message)
        }
    });
    const AllLagosHotelTotal = data?.data?.message

    return (
        <div className="AllHotelsMainCard">
            <div className="AllHotelsMainCardWrap">
                {
                    AllLagosHotelTotal?.map((room:any) => (
                        <Link key={room.id} className="AllHotelContent" to={`/detail/${room.id}`}>
                            <div className="AllHotelImageDiv">
                                <img src={room.imageId} className="AllHotelsImg"/>
                            </div>
                            <div className="AllHotelDetails">
                                <h4>{room.hotelName}</h4>
                                <p>{room.description}</p>
                                <p>{room.city}</p>
                                <p>{room.state}</p>
                            </div>
                            <button className="AllHotelsButton" >Book Now</button>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
export default LagosHotel