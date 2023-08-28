const { VITE_TOKEN } = import.meta.env;
import './AdminDashLeft.css'
import { useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaHotel } from "react-icons/fa";
import { MdAddHome } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import HomeLogo from './NewRoomLogo-removebg-preview.png'
import { useMutation, useQuery } from '@tanstack/react-query';
import { logOutAdmin } from '../../../component/APIS/Mutation';
import { getAdmin } from '../../../component/APIS/query';
import Swal from 'sweetalert2';
const AdminDashLeft: React.FC = () => {

    const {
        data,
    } = useQuery(["getadmin"], getAdmin, {
        enabled: !!localStorage.getItem(VITE_TOKEN),
        refetchOnWindowFocus: false,
        onSuccess: () => {
        },
    });
    const value: any = data?.data?.data
    const { mutate} = useMutation(['logoutAdmin'], logOutAdmin, {
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
    const handleLogoutClick = async () => {
        console.log('Button clicked!');
        mutate(value?.id)
    };
    const navigate = useNavigate()
    return (
        <div className='AdminDashLeftMain'>
            <div className='AdminDashLeftMainWrap'>
                <div className='AdminDashboardUserImgDiv' onClick={() => navigate("/")}>
                    <img src={HomeLogo} alt='userimg' className='AdminHome_Logo' />
                </div>
                <div className='AdminDashBoardLeftNav'>
                    <div className='AdminDashBoardLeftNav_Icon_Div'>
                        <RxDashboard />
                        <p onClick={() => navigate("/admindash/dashmain")}>DashBoard</p>
                    </div>
                    <div className='AdminDashBoardLeftNav_Icon_Div'>
                        <FaHotel />
                        <p onClick={() => navigate("/admindash/allhotels")}>All Hotels</p>
                    </div>
                    <div className='AdminDashBoardLeftNav_Icon_Div'>
                        <MdAddHome />
                        <p onClick={() => navigate("/admindash/addhotels")}>Add Hotels</p>
                    </div>
                    <div className='AdminDashBoardLeftNav_Icon_Div'>
                        <MdAddHome />
                        <p onClick={() => navigate(`/admindash/adminvacantroom/${value?.id}`)}>Admin Vacant Room</p>
                    </div>
                    <div className='AdminDashBoardLeftNav_Icon_Div'>
                        <MdAddHome />
                        <p onClick={(() => navigate(`/admindash/alladminroom/${value?.id}`))}>All Room</p>
                    </div>
                </div>
                <div className='AdminDashBoardLeftNav_Icon_Div'>
                    <BiLogOut />
                    <p onClick={handleLogoutClick}>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashLeft