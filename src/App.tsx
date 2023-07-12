import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './component/LandingPage/Home'
import './App.css'
import Detail from './component/DetailPage/Detail'
import AdminSignUp from './component/Onborading/AdminSignUp/AdminSignUp'
import AllLogins from './component/Onborading/AllLogins'
import AllSignUp from './component/Onborading/AllSignUp'
import AdminMainDashBoard from './Component2/AdminDash/AdminDashMain'
import UserMainDashBoard from './Component2/UserDash/UserDashMain'
const App: React.FC =() =>{


  return (
    <div className='AppMain'>
     <BrowserRouter>
     {/* <Header/> */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/alllogin/*' element={<AllLogins/>}/>
        <Route path='/allsignup/*' element={<AllSignUp/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/admindash' element={<AdminMainDashBoard/>}/>
        <Route path='/userdash' element={<UserMainDashBoard/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
