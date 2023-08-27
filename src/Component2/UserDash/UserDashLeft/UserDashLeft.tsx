const { VITE_TOKEN } = import.meta.env;
import { useNavigate } from "react-router-dom"
import User from './userimg.png'
import './UserDashLeft.css'
import { AiOutlineProfile, AiOutlineHistory } from "react-icons/ai";
import HomeLogo from './NewRoomLogo-removebg-preview.png'
import { useMutation } from "@tanstack/react-query";
import { logOutUser } from "../../../component/APIS/Mutation";
import Swal from "sweetalert2";
const UserDashLeft = ({value}: {value: any}) => {
    const navigate = useNavigate()
    const { mutate} = useMutation(['logoutAdmin'], logOutUser, {
        onSuccess: () => {
            localStorage.removeItem(VITE_TOKEN);
            setTimeout(() => {
                navigate('/')
            }, 500)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log out successful',
                showConfirmButton: false,
                timer: 2500
              })
        },
        onError: (error) => {
          console.log(error);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Please Verify Your Account',
            showConfirmButton: false,
            timer: 2500
          })

        },
      });
    const handleUserLogoutClick = async () => {
        console.log('Button clicked!');
        mutate(value?.id)
    };
    return (
        <div className="UserDashBoardLeft_Main">
            <div className="User_Home_Logo_Div" onClick={() => navigate("/")} >
                <img src={HomeLogo} className="HomeLogo" />
            </div>
            <div className="User_DashBoardLeft_Wrap">
                <div className='UserDashboardUserImgDiv'>
                    <img src={User} alt='userimg' className='UserImg' />
                    <p>Suliton Olalere</p>
                </div>
                <div className="UserDashBoard_Nav">
                    <div className="UserDashBoardLeftNav_Icon_Div" onClick={() => navigate("/userdash/userprofile")}>
                        <AiOutlineProfile />
                        <p>Current Booking</p>

                    </div>
                    <div className="UserDashBoardLeftNav_Icon_Div" onClick={() => navigate("/userdash/userhistory")}>
                        <AiOutlineHistory />
                        <p>Booking History</p>

                    </div>
                </div>
            </div>
            <div>
                <p onClick={handleUserLogoutClick}>Log Out</p>
            </div>
        </div>
    )
}

export default UserDashLeft