// import { useParams } from "react-router-dom"
// import RoomData from "../LandingPage/HomeData"
// import { useEffect, useState } from "react"
import './Detail.css'
const Detail: React.FC = () => {
  // const { id } = useParams()
  // const [rooms, setRooms] = useState()
  
  return (
    <div className="DetailMain">
      <div className="DetailMainWrap">
        <div className="Deatail_Left_Page">
          <div className="DetailImageDiv">
            <img className="DetailImage" />
          </div>
          <div className="DetailPageFacility">
            <p>facility</p>
          </div>
        </div>
        <div className="Deatail_Right_Page">
          <div className="DetailsDetails">
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
            <p>${}</p>
          </div>
          <div className="DeatailIncrement_Decrement-Bttn">
            <button className="DetailMinusBttn" ></button>
            <button className="DetailAddBttn" ></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail