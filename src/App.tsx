import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './component/LandingPage/Home'
import './App.css'
import Detail from './component/DetailPage/Detail'
import AdminSignUp from './component/Onborading/AdminSignUp/AdminSignUp'
import AllLogins from './component/Onborading/AllLogins'
import AllSignUp from './component/Onborading/AllSignUp'
import AdminMainDashBoard from './Component2/AdminDash/AdminDashMain'
import UserMainDashBoard from './Component2/UserDash/UserDashMain'
import AdminVerify from './component/Onborading/AdminSignUp/AdminVerify'
import UserVerify from './component/Onborading/UserSignUp/UserVerify'
import LagosHotel from './component/LandingPage/Popular/LagosHotel'
import KanoHotels from './component/LandingPage/Popular/KanoHotels'
import AbujaHotels from './component/LandingPage/Popular/Abuja'
import IbadanHotels from './component/LandingPage/Popular/IbadanHotels'
import RiverHotels from './component/LandingPage/Popular/RiverHotels'
import KwaraHotels from './component/LandingPage/Popular/KwaraHotels'
import AdminForgetPassword from './component/Onborading/AdminLogin/AdminForgetPassword/AdminForgetPassword'
import UserForgetPassword from './component/Onborading/UserLogin/UserForgetPassword/UserForgetPassword'
import AdminResetPassword from './component/Onborading/AdminLogin/AdminResetPassword/AdminResetPassword'
import UserResetPassword from './component/Onborading/UserLogin/UserResetPassword/UserResetPassword'
const App: React.FC = () => {
  return (
    <div className='AppMain'>
      <HashRouter>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/alllogin/*' element={<AllLogins />} />
          <Route path='/allsignup/*' element={<AllSignUp />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/adminsignup' element={<AdminSignUp />} />
          <Route path='/admindash/*' element={<AdminMainDashBoard />} />
          <Route path='/userdash/*' element={<UserMainDashBoard />} />
          <Route path='/adminverify/:id' element={<AdminVerify />} />
          <Route path='/userverify/:id' element={<UserVerify />} />
          <Route path='/lagoshotel' element={<LagosHotel />} />
          <Route path='/kanohotel' element={<KanoHotels />} />
          <Route path='/abujahotel' element={<AbujaHotels />} />
          <Route path='/ibadanhotel' element={<IbadanHotels />} />
          <Route path='/riverhotel' element={<RiverHotels />} />
          <Route path='/kwarahotel' element={<KwaraHotels />} />
          <Route path='adminforgetpassword' element={<AdminForgetPassword/>}/>
          <Route path='user-forgetpassword' element={<UserForgetPassword/>}/>
          <Route path='adminresetpassword/:id' element={<AdminResetPassword/>}/>
          <Route path='user-resetpassword/:id' element={<UserResetPassword/>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
