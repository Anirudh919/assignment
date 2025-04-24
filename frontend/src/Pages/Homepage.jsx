import React, { useEffect } from 'react'
import { Roomcard } from '../Components/Roomcard'
import { useRoomContext } from '../ContextApi/RoomContex'
import { useAuthContext } from '../ContextApi/AuthContext'
import { useSelector } from 'react-redux'
import { useGetRooms } from '../Hooks/useGetRooms'



import { FaSearch } from "react-icons/fa";




const Homepage = () => {        

const authUser=useSelector(state=>state.UserReducer)
const {loading,fetchRooms }=useGetRooms()
const rooms=useSelector(state=>state.RoomReducer)



useEffect(()=>{
  fetchRooms()

},[])





return(
    <div className="min-h-screen flex text-white bg-[#1e1e2f]">
      
     

      {/* Main content */}
      <div className="flex-1 px-8 py-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          
          <div className="flex items-center  space-x-4 ml-auto w-full">
            <h3 className='text-emerald-400 font-semibold mr-auto  flex items-center gap-3'>
                       
                          Home </h3>
            <input
              type="text"
              placeholder="Search in Homes, Apartments..."
              className="bg-gray-800 text-white px-4 py-2 rounded-xl w-72 focus:outline-none"
            />
            <FaSearch />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 flex-wrap mb-6">
          {['Flat', 'Luxury', 'Camping', 'A-Frame', 'Lake Villa'].map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-1 rounded-full border border-gray-600 ${cat === 'Luxury' ? 'bg-blue-600' : 'bg-gray-800'} hover:bg-blue-500`}
            >
              {cat}
            </button>
          ))}
         
        </div>

        {/* Property Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 max-h-[84%] lg:grid-cols-3 overflow-auto gap-6">
         {rooms.map((room) => (
        <Roomcard {...room }/>))}

        </div>
       
      </div>
    </div>
)
}









export default Homepage
