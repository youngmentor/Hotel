
import { useNavigate } from 'react-router-dom'
import './PopularHotel.css'
import { useState } from 'react'
import RoomData from '../HomeData'
import { useQuery } from "@tanstack/react-query";
import { getAbujaHotel,getLagosHotel } from "../../APIS/query";
type RoomDetails = {
    id: number,
    Avatar: string,
    name: string,
    desc: string,
    price: number,
    state: string,
    city: string,
  }
const Popular: React.FC = () => {
const navigate= useNavigate()
    const [showButton, setShowButton] = useState<boolean>(false)
    const [showButton2, setShowButton2] = useState<boolean>(false)
    const [showButton3, setShowButton3] = useState<boolean>(false)
    const [showButton4, setShowButton4] = useState<boolean>(false)
    const [showButton5, setShowButton5] = useState<boolean>(false)
    const [showButton6, setShowButton6] = useState<boolean>(false)
    const isShow = (
        showButton && (
            <div className='Show_Button'>
                <button>See Hotel</button>
            </div>
        )
    )
    const kwaraRooms: RoomDetails[] = RoomData.filter((room) => room.state === "Kwara");
    const numberOfKwaraHotels = kwaraRooms.length;
    const riverRooms: RoomDetails[] = RoomData.filter((room) => room.state === "River");
    const numberOfRiverHotels = riverRooms.length;
    const ibadanRooms: RoomDetails[] = RoomData.filter((room) => room.state === "Ibadan");
    const numberOfIbadanHotels = ibadanRooms.length;
    const  kanoRooms: RoomDetails[] = RoomData.filter((room) => room.state === "Kano");
    const numberOfKanoHotels = kanoRooms.length;

    const { data } = useQuery(['getabujahotel'], getAbujaHotel, {
        onSuccess: () => {
            // console.log(data?.data?.message?.length)
        }
    });
    const AllAbujaHotelTotal = data?.data?.message?.length
    const { data: lagosData } = useQuery(['getlagoshotel'], getLagosHotel, {
        onSuccess: () => {
            // console.log(data?.data?.message)
        }
    });
    const AllLagosHotelTotal = lagosData?.data?.message?.length

    return (
        <div className="PopulaMain">
            <h4>Popular cities with Hotels travellers wants</h4>
            <div className="PopulaMainWrap">
                <div className="PopularLagos"
                    onMouseEnter={() => { setShowButton(!showButton) }}
                    onMouseLeave={() => { setShowButton(!showButton) }}
                >
                    <div className='PopularLagosWrap'>
                        <div className='PopularDetails'>
                            <p className='HotelNum'>{AllLagosHotelTotal} Hotels </p>
                            <h4 className='HotelName'>In Lagos</h4>
                        </div>
                        {
                            showButton ? <div className='two'  ><button onClick={(()=>navigate("/lagoshotel"))}>See Hotel</button></div> : <div className=''></div>
                        }
                        {isShow && showButton}
                    </div>
                </div>
                <div className="PopularKano"
                    onMouseEnter={() => { setShowButton2(!showButton2) }}
                    onMouseLeave={() => { setShowButton2(!showButton2) }}
                >
                    <div className='PopularLagosWrap'>
                        <div className='PopularDetails'>
                            <p className='HotelNum'>{numberOfKanoHotels}</p>
                            <h4 className='HotelName'>Kano</h4>
                        </div>
                        {
                            showButton2 ? <div className='two'  ><button onClick={(()=>navigate("/kanohotel"))}>See Hotel</button></div> : <div className=''></div>
                        }
                    </div>
                </div>
                <div className="PopularAbuja"
                    onMouseEnter={() => { setShowButton3(!showButton3) }}
                    onMouseLeave={() => { setShowButton3(!showButton3) }}
                >
                    <div className='PopularLagosWrap'>
                        <div className='PopularDetails'>
                            <p className='HotelNum'>{AllAbujaHotelTotal}</p>
                            <h4 className='HotelName'>Abuja</h4>
                        </div>
                        {
                            showButton3 ? <div className='two'  ><button onClick={(()=>navigate("/abujahotel"))}>See Hotel</button></div> : <div className=''></div>
                        }
                    </div>
                </div>
                <div className="PopularRiver"
                    onMouseEnter={() => { setShowButton4(!showButton4) }}
                    onMouseLeave={() => { setShowButton4(!showButton4) }}
                >
                    <div className='PopularLagosWrap'>
                        <div className='PopularDetails'>
                            <p className='HotelNum'>{numberOfRiverHotels}</p>
                            <h4 className='HotelName'>River</h4>
                        </div>
                        {
                            showButton4 ? <div className='two'  ><button onClick={(()=>navigate("/riverhotel"))}>See Hotel</button></div> : <div className=''></div>
                        }
                    </div>
                </div>
                <div className="PopularKwara"
                    onMouseEnter={() => { setShowButton5(!showButton5) }}
                    onMouseLeave={() => { setShowButton5(!showButton5) }}
                >
                    <div className='PopularLagosWrap'>
                        <div className='PopularDetails'>
                            <p className='HotelNum'>{numberOfKwaraHotels}</p>
                            <h4 className='HotelName'>Kwara</h4>
                        </div>
                        {
                            showButton5 ? <div className='two'  ><button onClick={(()=>navigate("/kwarahotel"))}>See Hotel</button></div> : <div className=''></div>
                        }
                    </div>
                </div>
                <div className="PopularIbadan"
                    onMouseEnter={() => { setShowButton6(!showButton6) }}
                    onMouseLeave={() => { setShowButton6(!showButton6) }}
                >
                    <div className='PopularLagosWrap'>
                        <div className='PopularDetails'>
                            <p className='HotelNum'>{numberOfIbadanHotels}</p>
                            <h4 className='HotelName'>Ibadan</h4>
                        </div>
                        {
                            showButton6 ? <div className='two'  ><button onClick={(()=>navigate("/ibadanhotel"))}>See Hotel</button></div> : <div className=''></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popular