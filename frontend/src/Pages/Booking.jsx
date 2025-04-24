import { useEffect,useState } from 'react'
import { Roomcard } from '../Components/Roomcard'


import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Booking = () => {        
const [rooms,setRooms]=useState([])
const authUser=useSelector(state=>state.UserReducer)

const navigate=useNavigate()

const fetchBookings = async () => {
    try {
        const response = await fetch(`/api/rooms/getbookings/${authUser?._id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        });
    
        if (!response.ok) {
        throw new Error('Failed to fetch bookings');
        }
    
        const data = await response.json();
        
        setRooms(data.bookings);
    } catch (error) {
        console.error(error);
    }
}

useEffect(()=>{
    
    fetchBookings(authUser?._id)
    
},[])




return(
    <div className="min-h-screen flex text-white bg-[#1e1e2f]">
      
     

      {/* Main content */}
      <div className="flex-1 px-8 py-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          
          <div className=" flex items-center space-x-4 ml-auto w-full">
            <h3 className='mr-auto  flex items-center gap-3'>
            <IoMdArrowBack onClick={()=>navigate(-1)}
            className='cursor-pointer hover:text-blue-500'/>
              Bookings </h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {rooms.map((room) => (
        <Roomcard {...room}/>))}

        </div>
       
      </div>
    </div>
)}

export default Booking