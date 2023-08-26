import './Landing3.css'
import { useNavigate } from 'react-router-dom'
import { getAllRoom } from '../../APIS/query'
import { useQuery } from '@tanstack/react-query'

const Landing3: React.FC = () => {
    const navigate = useNavigate()

    const { data, isLoading } = useQuery(['getallroom'], getAllRoom, {
        onSuccess: () => {

        }
    })
    // console.log(data?.data?.data)
    const AllRoom = data?.data?.data
    // const AllRoom: MyObject[] = myArray.slice(0, 9);
    return (
        <div className="Landing3Main">
            <div className='Landing3Heading'>
                <h3>Pick a rooms from around the wolrd</h3>
            </div>
            {
                isLoading ? (
                    "Loading rooms ..."
                ) : (
                    <div className="Landing3MainWrap">
                        {AllRoom?.length === 0 ? (
                            "No room is available for this category"
                        ) : (
                            AllRoom?.map((i: any) => (
                                <div key={i.id} className='Landing4CardWrap'>
                                    <img src={i.image} alt='Landing4Img' className='Landing4HotelImg' />
                                    <div className='Landing4Details'>
                                        <p>Price: {i.price}</p>
                                        <p>Desc: {i.roomDescription}</p>
                                        <p>Location: {i.address}</p>
                                    </div>
                                    <button onClick={(() => navigate(`detail/${i.id}`))} className='BookNow_Button'>Book Now</button>
                                </div>
                            ))
                        )
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Landing3