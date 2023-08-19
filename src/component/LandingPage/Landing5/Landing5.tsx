import { useQuery } from '@tanstack/react-query'
import './Landing5.css'
import { getCheapRoom } from '../../APIS/query'

const Landing5: React.FC = () => {
    const { data } = useQuery(['getcheaproom'], getCheapRoom, {
        onSuccess: () => {

        }
    })
    console.log(data?.data?.data)
    const cheapRoom = data?.data?.data
    return (
        <div className='Landing5Main'>
            <div className='Landing5Main_Wrap'>
                <h3>Perks from our cheap Room</h3>
                {
                    cheapRoom.map((i: any) => (
                        <div className="" key={i.id}>
                            <img src={i.image} className='' />
                            <div className=''>
                                <p>Hotel Name: {i.price} </p>
                                <p>Hotel city: {i.roomNumber}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Landing5 