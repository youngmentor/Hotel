import { HashRouter, Routes,Route } from 'react-router-dom'
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
const App: React.FC =() =>{


  return (
    <div className='AppMain'>
     <HashRouter>
     {/* <Header/> */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/alllogin/*' element={<AllLogins/>}/>
        <Route path='/allsignup/*' element={<AllSignUp/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/admindash/*' element={<AdminMainDashBoard/>}/>
        <Route path='/userdash' element={<UserMainDashBoard/>}/>
        <Route path='/adminverify/:id' element={<AdminVerify/>}/>
        <Route path='/userverify/:id' element={<UserVerify/>}/>

       </Routes>
     </HashRouter>
    </div>
  )
}

export default App
