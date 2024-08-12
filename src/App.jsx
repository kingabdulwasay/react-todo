import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/header'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Add from './Pages/Add/Add'
function App() {

// #00B0FF
  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
       <Route path='/'  element= { <Add /> }/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/login' element= {<Login />}/>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
