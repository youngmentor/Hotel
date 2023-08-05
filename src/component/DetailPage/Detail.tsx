import { useParams } from "react-router-dom"
import RoomData from "../LandingPage/HomeData"
import { useEffect, useState } from "react"
import './Detail.css'
import { useDispatch, useSelector } from "react-redux";
import { addToRoom, minusRoom } from "../../Redux/Features"
import { RootState } from '../../Redux/Store';
type RoomDetails = {
  QTY: number,
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
  const [rooms, setRooms] = useState<RoomDetails>()
  const dispatch = useDispatch()
  const {  room, } = useSelector((state: RootState) => state.eBooking);
  useEffect(() => {
    const Room = RoomData.filter((i) => (i.id === Number(id)))
    const roomWithQty = room.find((r) => r.id === Number(id)) || { QTY: 0 };
    setRooms({ ...Room[0], ...roomWithQty });
  },[id])
  // console.log(room)

  return (
    <div key={rooms?.id} className="DetailMain">
      <div className="DetailMainWrap">
        <div className="Deatail_Left_Page">
          <div className="DetailImageDiv">
            <img src={rooms?.Avatar} className="DetailImage" />
          </div>
          <div className="DetailPageFacility">
            <p>facility</p>
          </div>
        </div>
        <div className="Deatail_Right_Page">
          <div className="DetailsDetails">
            <p>{rooms?.desc}</p>
            <p>{rooms?.city}</p>
            <p>{rooms?.state}</p>
            <p>${rooms?.price}</p>
          </div>
          <div className="DeatailIncrement_Decrement-Bttn">
            <button className="DetailMinusBttn" onClick={()=>dispatch(minusRoom)}>-</button>
            <p>{rooms?.QTY }</p>
            <button className="DetailAddBttn" onClick={()=>dispatch(addToRoom)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail