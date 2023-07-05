import { Link } from "react-router-dom"
import RoomData from "../HomeData"
import Landing1 from "../Landing1/Landing1"
const AllRooms: React.FC=()=>{
    return(
        <div className='HomePageHome'>
            <Landing1/>
        {RoomData.map((item) => (
          <Link className='Prod_Card' key={item.id} to={`/detail/${item.id}`}>
            <img src={item.Avatar} className='Img' />
            <h4 className='ProductName'>{item.name}</h4>
            <p className='Desc_Contain'>{item.desc}</p>
            <div className='ProdPricBttn'>
              <p>${item.price}</p>
              <button className='BookBttn'>Book Now</button>
            </div>
          </Link>
        ))}
      </div>
    )
}

export default AllRooms