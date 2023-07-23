import './Landing4.css'
import HotelData from './HotelData'
const Landing4: React.FC = () => {
    return (
        <div className='Landing4Main'>
            <div className='Landing4Heading'>
                <h3>Popular Hotels Around the City</h3>
            </div>
            <div className='Landing4Card'>
                {
                    HotelData.map((i) => (
                        <div key={i.id} className='Landing4CardWrap'>
                            <img src={i.Img} alt='Landing4Img' className='Landing4HotelImg' />
                            <div className='Landing4Details'>
                                <p>{i.HotelName}</p>
                                <p>{i.Location}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Landing4