import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './component/Onborading/Login'
import SignUp from './component/Onborading/SignUp'
import Home from './component/LandingPage/Home'
import './App.css'
function App() {


  return (
    <div className='AppMain'>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
