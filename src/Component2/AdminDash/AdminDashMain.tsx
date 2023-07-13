import AdminDashLeft from "./AdminDashLeft/AdminDashLeft"
import AdminDashRight from "./AdminDashRight/AdminDashRight"


const AdminMainDashBoard: React.FC = () => {


    return (
        <div className="AdminDashBoardMain">
            <div className='AdminDashboard_Main_Wrap'>
                <div className='AdminDasboard_Main_Left'>
                    <AdminDashLeft />
                </div>
                <div className='AdminDashboard_Main_Right'>
                    <AdminDashRight />
                </div>
            </div>
        </div>
    )
}

export default AdminMainDashBoard