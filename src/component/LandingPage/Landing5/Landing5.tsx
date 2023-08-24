import { useQuery } from '@tanstack/react-query'
import './Landing5.css'
import { getCheapRoom } from '../../APIS/query'
// import ButtonLoading from '../../../ButtonLoader/ButtonLoader'
import { useNavigate } from 'react-router-dom'

const Landing5: React.FC = () => {
    const navigate = useNavigate()
    const { data, isLoading, } = useQuery(['getcheaproom'], getCheapRoom, {
        onSuccess: () => {

        }
    })
    // console.log(data?.data?.data)
    const cheapRoom = data?.data?.data
    return (
        <div className='CheapRoom_Main'>
            <div className='CheapRoom_Main_Wrap'>
                <div className='Landing4Heading'>
                    <h3>Perks from our cheap Room</h3>
                </div>
                {
                    isLoading ? (
                        'Loading Rooms ...'
                    ) : (
                        <div className='Landing4Card'>
                            {
                                cheapRoom?.map((i: any) => (
                                    <div className="CheapRoom_Card" key={i.id}>
                                        <img src={i?.image} className='CheapRoom_Img' />
                                        <div className='CheapRoom_Details'>
                                            <p>Price: {i?.price}</p>
                                            <p>Desc: {i?.roomDescription}</p>
                                            <p>Location: {i?.address}</p>
                                        </div>
                                        <button onClick={(() => navigate(`detail/${i.id}`))} className='BookNow_Button'>Book Now</button>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Landing5 