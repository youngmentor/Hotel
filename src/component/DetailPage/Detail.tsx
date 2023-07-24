import { useParams } from "react-router-dom"
import RoomData from "../LandingPage/HomeData"
import { useEffect, useState } from "react"
import './Detail.css'
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

  useEffect(() => {
    const Room = RoomData.filter((i) => (i.id === Number(id)))
    setRoom(Room[0])
  })
  // console.log(room)
  return (
    <div key={room?.id} className="DetailMain">
      <div className="DetailMainWrap">
        <div className="DetailImageDiv">
          <img src={room?.Avatar} className="DetailImage" />
        </div>
        <div className="DetailsDetails">
          <p>{room?.desc}</p>
          <p>{room?.city}</p>
          <p>{room?.state}</p>
        </div>
      </div>
    </div>
  )
}
export default Detail