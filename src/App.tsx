import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Login from './component/Onborading/UserLogin/LoginUser'
import SignUp from './component/Onborading/UserSignUp/SignUpUser'
import Home from './component/LandingPage/Home'
import './App.css'
import Detail from './component/DetailPage/Detail'
// import AdminLogin from './component/Onborading/AdminLogin/AdminLogin'
import AdminSignUp from './component/Onborading/AdminSignUp/AdminSignUp'
import AllLogins from './component/Onborading/AllLogins'
// import Header from './component/Header/Header'
const App: React.FC =() =>{


  return (
    <div className='AppMain'>
     <BrowserRouter>
     {/* <Header/> */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/alllogin/*' element={<AllLogins/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        {/* <Route path='/adminlogin' element={<AdminLogin/>}/> */}
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
