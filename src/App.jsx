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
     <footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">TODO LIST APP</span>
    </a>
    <p class=" text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Created by Abdul Wasay Rais
      {/* <p class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</p> */}
    </p>
   
  </div>
</footer>
     </BrowserRouter>

    </>
  )
}

export default App
