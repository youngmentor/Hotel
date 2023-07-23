import './Footer.css'
import FooterLogo from './1 (12).png'
import { FaFacebook,FaWhatsapp,FaInstagram,FaTwitter } from "react-icons/fa";
const Footer: React.FC = () => {
    // const Date = newDate()
    return (
        <div className="FooterMain">
            <div className="FooterMainWrap">
                  <div>
                    <img src={FooterLogo} className='FooterLogo' />
                  </div>
                  <div className='FooterNav'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Terms and Condition</p>
                    <p>Privacy Policy</p>
                  </div>
                  <div className='FooterIconDiv'>
                    <FaFacebook/>
                    <FaWhatsapp/>
                    <FaInstagram/>
                    <FaTwitter/>
                  </div>
            </div>
            <div className='FooterCopywrite'>
                <p>Copywrite@2023</p>
            </div>
        </div>
    )
}
export default Footer