import { useSelector } from "react-redux"
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import {Login} from './Pages/Login'
import Signup from './Pages/Signup'
import RoomDetails from './Pages/RoomDetails'
import Booking from './Pages/Booking'
import { Toaster } from "react-hot-toast"


import AdminPage from './Pages/Admin'
import UpdateRoomsDetails from "./Pages/UpdateRoomDetails"


function App() {
  
  const authUser=useSelector(state=>state.UserReducer)
  


  return (
   <div className=''>
<Header/>
<Toaster position="top-right"/>
    <Routes>


<Route path="/" element={<Homepage/>}/>
<Route path="/bookings" element={<Booking/>}/>
<Route path="/login" element={authUser?<Navigate to="/"/>:<Login/>}/>
<Route path="/admin" element={(authUser && authUser?.role =="admin")? <AdminPage/>:<Navigate to="/"/>}/>
<Route path="/signup" element={authUser?<Navigate to="/"/>:<Signup/>}/> 
<Route path="/roomdetails/:roomId" element={<RoomDetails/>}/> 
<Route path="/admin/update/:id" element={(authUser && authUser.role =="admin")?<UpdateRoomsDetails/>:<Navigate to="/"/>}/> 
<Route path="*" element={<h1>404 Not Found</h1>}/>

    </Routes>

    <Footer/>
   </div>
  )
}

export default App
