
import './PopularHotel.css'
import PopularH from './PopularData'
import { useState } from 'react'
const Popular: React.FC = () => {

    const [showButton, setShowButton] = useState<boolean>(false)

    const isShow = (
        showButton && (
            <div className='Show_Button'>
                <button>See Hotel</button>
            </div>
        )
    )
    return (
        <div className="PopulaMain">
            <h4>Popular cities with Hotels travellers wants</h4>
            <div className="PopulaMainWrap">
                {PopularH.map((i) => (
                    <div className="PopularLagos" style={{
                        backgroundImage: `url(${i.Avatar})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                        onMouseEnter={() => { setShowButton(!showButton) }}
                        onMouseLeave={() => { setShowButton(!showButton) }}
                      key={i.id}
                    >
                        <div className='PopularLagosWrap'>
                            <div className='PopularDetails'>
                                <p>{i.HotelNum}</p>
                                <h4>{i.name}</h4>
                            </div>
                            {
                                showButton ? <div className='two'  ><button>See Hotel</button></div> : <div className=''></div>
                            }
                            {isShow && showButton}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Popular