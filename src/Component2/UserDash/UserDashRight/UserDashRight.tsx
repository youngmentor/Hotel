const { VITE_TOKEN } = import.meta.env;
import { Route, Routes, useNavigate } from "react-router-dom"
import UserProfile from "./UserProfile/UserProfile"
import UserHistory from "./UserHistory/UserHistory"
import './UserDashRight.css'
import { useState } from "react"
import HomeLogo from './RoomLogo-removebg-preview.png'
import { AiOutlineProfile, AiOutlineHistory } from "react-icons/ai";
import User from './userimg.png'
import Swal from "sweetalert2"
import { useMutation } from "@tanstack/react-query"
import { logOutUser } from "../../../component/APIS/Mutation"
import { BiLogOut } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const UserDashRight = ({ value }: { value: any }) => {
  const [userMobile, setUserMobile] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleUserMobileChange = () => {
    setUserMobile(!userMobile)
  }
  const handlecloseMobile = () => {
    setUserMobile(false)
  }
  const handleNavigate = (path: string) => {
    navigate(path);
    handlecloseMobile();
  };
  const { mutate } = useMutation(['logoutAdmin'], logOutUser, {
    onSuccess: (data) => {
      localStorage.removeItem(VITE_TOKEN);
      setTimeout(() => {
        navigate('/')
      }, 500)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data?.data?.message,
        showConfirmButton: false,
        timer: 2500
      })
    },
    onError: (error: any) => {
      if (error?.response && error?.response?.data && error?.response?.data?.message) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
        });
      }

    },
  });
  // const UserName = value?.fullname
  const handleUserLogoutClick = async () => {
    console.log('Button clicked!');
    mutate(value?.id)
  };
  const UserMobileDropDown = (

    userMobile && (
      <div className="UserDashBoardLeftMobile_Main">
        <div className="User_Home_Logo_Div" onClick={() => navigate("/")} >
          <img src={HomeLogo} className="HomeLogo" />
        </div>
        <div className="User_DashBoardLeft_Wrap">
          <div className='UserDashboardUserImgDiv'>
            <img src={User} alt='userimg' className='UserImg' />
            <p>{ }</p>
          </div>
          <div className="UserDashBoard_Nav">
            <div className="UserDashBoardLeftNav_Icon_Div" onClick={() => handleNavigate("/userdash/userprofile")}>
              <AiOutlineProfile />
              <p>User Profile</p>

            </div>
            <div className="UserDashBoardLeftNav_Icon_Div" onClick={() => handleNavigate("/userdash/userhistory")}>
              <AiOutlineHistory />
              <p>Current Booking</p>

            </div>
          </div>
        </div>
        <div className="UserDashBoardLeftNav_Icon_Div" onClick={handleUserLogoutClick}>
          <BiLogOut />
          <p onClick={handleUserLogoutClick}>Log Out</p>
        </div>
      </div>
    )
  )
  return (
    <div className="UserDashRight_Main">
      <div className="UserDash_Header">
        <div className='UserDashRightHeader_Wrap'>
          <p className='UserNameDisplay'>Welcome back {value?.fullname} ! </p>
          {
            userMobile ? <FaTimes onClick={handleUserMobileChange} /> : <RxHamburgerMenu onClick={handleUserMobileChange} className="AdminMobileBurger" />
          }

        </div>
        {userMobile && UserMobileDropDown}
        <div className='UserDashRightHeaderIcon'>
          <FaRegUserCircle />
        </div>
      </div>
      <div className="UserDashRight_Content">
        <Routes>
          <Route path="/userprofile" element={<UserProfile value={value} />} />
          <Route path="/userhistory" element={<UserHistory value={value} />} />
        </Routes>
      </div>
    </div>
  )
}

export default UserDashRight