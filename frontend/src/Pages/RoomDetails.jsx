import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useGetRoombyId } from '../Hooks/useGetRoombyId.js'
import { useRoomContext } from '../ContextApi/RoomContex.jsx'
import { useAuthContext } from '../ContextApi/AuthContext.jsx'
import {toast} from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useBookroom } from '../Hooks/useBookroom.js'
import { FaStar, FaTruck } from "react-icons/fa";
import { useState } from 'react'
import { useRemoveRoom } from '../Hooks/useRemoveRoom.js'
 const RoomDetails = () => {
  const {roomId}=useParams()

const rooms=useSelector(state=>state.RoomReducer)
let roomDetails=rooms.filter((room)=>room._id === roomId)

const {Bookroom}=useBookroom()

const {RemoveRoom}=useRemoveRoom()



const authUser=useSelector(state=>state.UserReducer)

const isBooked=roomDetails[0]?.bookedBy == authUser?._id 
 

 useEffect(()=>{
  
 },[roomId])

  return (
    <div className="min-h-screen  p-6 text-[#1c1c1c] bg-gray-800">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section - Product Images */}
        <div>
          <img
            src={roomDetails[0]?.roomImg || "https://media.istockphoto.com/id/1182454305/photo/bohemian-living-room-interior-3d-render.jpg?s=1024x1024&w=is&k=20&c=38OQU2C3Oh83ADU7ertNWQYL7TNtW-pge3-noz0grII=" }
            alt={roomDetails[0]?.roomDescription}
            className="rounded-xl w-full object-cover h-[400px]"
          />
          
        </div>

        {/* Right Section - Product Info */}
        <div>
          <h2 className="text-2xl capitalize font-semibold mb-2">{roomDetails[0]?.roomTitle} - {roomDetails[0]?.roomType} </h2>
          <div className="flex items-center gap-2  justify-end  text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            <span className="text-gray-600 text-sm">(120 Reviews)</span>
          </div>

          <p className="text-2xl  text-blue-600 font-semibold  mb-4">₹ {roomDetails[0]?.roomPrice}<span className='text-gray-400 font-semibold text-sm '>/ 24hrs</span></p>
          <p className="text-gray-600 mb-6">
          {roomDetails[0]?.roomDescription}
          </p>

     
          <div className="flex gap-4 mb-3">
          <button  onClick={()=>Bookroom(roomId)}
className={`mt-6 w-full  text-white px-4 cursor-pointer
       py-3 ${isBooked?"bg-blue-600":"bg-green-600"}`}>
           {isBooked == true ?"Already Booked":"Book Now"}
            
       </button>
{isBooked &&  <button  onClick={()=>RemoveRoom(roomId)}
className={`mt-6 w-full  text-white px-4 cursor-pointer
       py-3 bg-red-500 hover:bg-red-300`}>
           Cancel Now
            
       </button>}
      
          
          </div>

          <div className="flex font-semibold capitalize items-center justify-center gap-2 text-sm text-gray-600 mt-3">
            
            instant  booking within 10-15 minutes 
            <span className='font-bold'>or 200% cashback</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomDetails