import RoomData from "../HomeData"
import './AllPopularHotel.css'
type RoomDetails = {
    id: number,
    Avatar: string,
    name: string,
    desc: string,
    price: number,
    state: string,
    city: string,
}
const IbadanHotels: React.FC = () => {
    const lagosRooms: RoomDetails[] = RoomData.filter((room) => room.state === "Ibadan");


    return (
        <div>
            {
                lagosRooms.map((room) => (
                    <div key={room.id}>
                        <h2>{room.name}</h2>
                        <p>{room.desc}</p>
                        <p>{room.city}</p>
                        <p>${room.price}</p>
                    </div>
                ))}
        </div>
    )
}
export default IbadanHotels