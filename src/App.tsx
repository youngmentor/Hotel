import { BrowserRouter, Routes,Route } from 'react-router-dom'
import TodoForm from './testx'
import Login from './component/Onborading/Login'
import SignUp from './component/Onborading/SignUp'

function App() {


  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<TodoForm/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
