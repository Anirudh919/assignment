import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../ContextApi/AuthContext'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  const authInfo=useSelector(state=>state.UserReducer)

  // useEffect(()=>{},[authInfo])

  return (
   <nav className='bg-gray-800 text-white p-4'>

    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        <Link to="/" className='text-xl font-bold hover:text-blue-500'> Hotel Mate </Link>
        <ul className='flex gap-4 '>
            <Link to="/" className='inline-block mr-4 hover:text-teal-500'>Home</Link>
            <Link to={"/contact"} className='inline-block mr-4 hover:text-teal-500'>Contact</Link>


            {authInfo && <Link to={"/bookings"} className='inline-block mr-4 hover:text-teal-500'>Bookings</Link>}
           
           
           
           {!authInfo && <>
            <Link to={"/login"} className='inline-block mr-4 hover:text-teal-500'>Login</Link>
            <Link to={"/signup"} className='inline-block mr-4 hover:text-teal-500'>Signup</Link>
            </>}



            

            {
            
            (authInfo && authInfo?.role=="admin")?


            (<Link to={"/admin"} className='inline-block mr-4 hover:text-teal-500' >Admin</Link>):

            (authInfo &&  <Link to={""} className='inline-block mr-4 hover:text-teal-500'>Profile</Link>)
           
            
            
            
            }
            
            
           
            
           
        </ul>
        
       </div>



   </nav>
  )
}

export default Header
