import { BrowserRouter, Routes,Route } from 'react-router-dom'
import TodoForm from './assets/testx'
import Login from './component/Onborading/Login'

function App() {


  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<TodoForm/>}/>
        <Route path='login' element={<Login/>}/>
        {/* <Route path='signup' element={<} */}
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
