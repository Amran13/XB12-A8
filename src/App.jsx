
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './component/Home'
import Navbar from './component/Navbar'
import TopApp from './component/TopApp'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
