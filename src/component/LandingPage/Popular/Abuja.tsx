import { useQuery } from "@tanstack/react-query";
import './AllPopularHotel.css'
import { getAbujaHotel } from "../../APIS/query";

const AbujaHotels: React.FC = () => {

    const { data } = useQuery(['getabujahotel'], getAbujaHotel, {
        onSuccess: () => {
            // console.log(data?.data?.message)
        }
    });
    const AllAbujaHotel = data?.data?.message
    return (
        <div className="AbujaHotel_Main">
            <div className="AbujaHotelMain_Wrap">
                {
                    AllAbujaHotel?.map((i: any) => (
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
export default AbujaHotels