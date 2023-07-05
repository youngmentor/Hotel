import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './component/Onborading/UserLogin/LoginUser'
import SignUp from './component/Onborading/UserSignUp/SignUpUser'
import Home from './component/LandingPage/Home'
import './App.css'
import Detail from './component/DetailPage/Detail'
// import Header from './component/Header/Header'
const App: React.FC =() =>{


  return (
    <div className='AppMain'>
     <BrowserRouter>
     {/* <Header/> */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
