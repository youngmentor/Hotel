import './AllPopularHotel.css'
import { useQuery } from "@tanstack/react-query";
import { getKanoHotel } from "../../APIS/query";

const KanoHotels: React.FC = () => {
    const { data } = useQuery(['getlagoshotel'], getKanoHotel, {
        onSuccess: () => {
            // console.log(data?.data?.message)
        }
    });
    const AllKanoHotelTotal = data?.data?.message
    return (
        <div className='KanoHotel_Main'>
            <div className="AbujaHotelMain_Wrap">
                {
                    AllKanoHotelTotal?.map((i: any) => (
                        <div key={i.id} className="AbujaHotel_Card">
                            <img src={i.imageId} className="AbujaHotelImg" />
                            <div className="AbujaHotelDetails">
                                <p> Hotel Name: {i.hotelName}</p>
                                <p>Hotel Desc: {i.description}</p>
                                <p>Hotel City: {i.city}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}
export default KanoHotels