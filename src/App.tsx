import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './component/Onborading/Login'
import SignUp from './component/Onborading/SignUp'
import Home from './component/LandingPage/Home'
import './App.css'
import Header from './component/Header/Header'
function App() {


  return (
    <div className='AppMain'>
     <BrowserRouter>
     <Header/>
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
