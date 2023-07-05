import './Header.css'
import Logo from './1 (12).png'
const Header: React.FC = () =>{
    return (
        <div className="HeaderMain">
            <div className="HeaderWrap">
                <img src={Logo} className=''/>
                <div className='HeaderNav'>
                <p>Home</p>
                <p>About</p>
                <p>Rooms</p>
                <p>Location</p>
                </div>
            </div>
        </div>
    )
}
export default Header
