import { useParams } from "react-router-dom"
import RoomData from "../LandingPage/HomeData"
import { useEffect, useState } from "react"

type RoomDetails = {
  id: number,
  Avatar: string,
  name: string,
  desc: string,
  price: number,
  state: string,
  city: string,
}
const Detail: React.FC = () => {
  const { id } = useParams()
  const [room, setRoom] = useState<RoomDetails>()

 useEffect (()=>{
   const Room = RoomData.filter((i)=> (i.id === Number(id)))
   setRoom(Room[0])
 })
// console.log(room)
  return (
    <div>
       <div key={room?.id}>
          <img src={room?.Avatar} />
          <p>{room?.desc}</p>
          <p>{room?.city}</p>
          <p>{room?.state}</p>
       </div>
    </div>
  )
}
export default Detail