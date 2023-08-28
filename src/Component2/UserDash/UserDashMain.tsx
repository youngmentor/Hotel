const { VITE_TOKEN_USER} = import.meta.env;
import { useQuery } from '@tanstack/react-query';
import UserDashLeft from './UserDashLeft/UserDashLeft'
import './UserDashMain.css'
import UserDashRight from './UserDashRight/UserDashRight'
import { getUser } from '../../component/APIS/query';
const UserMainDashBoard: React.FC = () => {

    const { data: userData } = useQuery(["getuser"], getUser, {
        enabled: !!localStorage.getItem(VITE_TOKEN_USER),
        refetchOnWindowFocus: false,
        onSuccess: () => {
        },
        onError: () => {

        },
    });
    const value: any = userData?.data?.data
    return (
        <div className="UserDashBoardMain">
            <div className='UserDashboard_Main_Wrap'>
                <div className='UserDasboard_Main_Left'>
                    <UserDashLeft value={value}/>
                </div>
                <div className='UserDashboard_Main_Right'>
                    <UserDashRight value={value} />
                </div>
            </div>
        </div>
    )
}

export default UserMainDashBoard