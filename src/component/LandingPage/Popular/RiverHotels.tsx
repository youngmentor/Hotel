import { useQuery } from "@tanstack/react-query";
import './AllPopularHotel.css'
import { getCalabarHotel } from "../../APIS/query";


const RiverHotels: React.FC = () => {
const {data}= useQuery([''], getCalabarHotel,{
    onSuccess: ()=>{
        console.log(data?.data?.message)
    }
})
const AllCalabarHotel = data?.data?.message
    return (
        <div className="AbujaHotel_Main">
        <div className="AbujaHotelMain_Wrap">
            {
                AllCalabarHotel?.map((i: any) => (
                    <div key={i.id} className="AbujaHotel_Card">
                        <img src={i.imageId} className="AbujaHotelImg" />
                        <div className="AbujaHotelDetails">
                            <p> Hotel Name: {i.hotelName}</p>
                            <p>Hotel Desc: {i.description}</p>
                            <p>{i.city}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    </div>
    )
}
export default RiverHotels