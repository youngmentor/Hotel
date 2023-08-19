import { useQuery } from '@tanstack/react-query'
import './Landing5.css'
import { getCheapRoom } from '../../APIS/query'
import ButtonLoading from '../../../ButtonLoader/ButtonLoader'

const Landing5: React.FC = () => {
    const { data, isLoading } = useQuery(['getcheaproom'], getCheapRoom, {
        onSuccess: () => {

        }
    })
    // console.log(data?.data?.data)
    const cheapRoom = data?.data?.data
    return (
        <div className='CheapRoom_Main'>
         <div className='CheapRoom_Main_Wrap'>
            <h3>Perks from our cheap Room</h3>
            {isLoading ? (
                <ButtonLoading/>
            ) : (
                cheapRoom.map((i: any) => (
                    <div className="CheapRoom_Card" key={i.id}>
                        <img src={i.image} className='CheapRoom_Img' />
                        <div className='CheapRoom_Details'>
                            <p>Hotel Name: {i.price}</p>
                            <p>Desc: {i.roomDescription}</p>
                        </div>
                        <button>Book Now</button>
                    </div>
                ))
            )}
        </div>
        </div>
    )
}

export default Landing5 