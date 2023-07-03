import RoomData from "../LandingPage/HomeData"
import { useParams } from "react-router-dom"

const Detail: React.FC  = ()=>{
const {}= useParams
    return(
        <div>
           {RoomData.map((i)=>(
           <div key={i.id}>
             <img src={i.Avatar} />
           </div>
           ))}
        </div>
    )
}
export default Detail