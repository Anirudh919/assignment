import React, { useEffect } from 'react'
import { useGetRooms } from '../Hooks/useGetRooms';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Admindashboard = () => {
  



    const {fetchRooms}=useGetRooms()
    const rooms=useSelector(state=>state.RoomReducer)
    const authUser=useSelector(state=>state.UserReducer)

    useEffect(()=>{fetchRooms()},[])
    




return(
  
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Header */}
      

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
              <th className="p-2 text-left">Room No.</th>
              
                <th className="p-2 text-left">Room Type</th>
                
                <th className="p-2 text-left">Room Title</th>
                
                <th className="p-2 text-left">Room Price</th>
                
                <th className="p-2 text-left">Room Available</th>
                <th className="p-2 text-left">Actions</th>
                {/* <th className="p-2"></th> */}
              </tr>
            </thead>
            <tbody>
              {rooms?.map((room, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-2 capitalize">{room.roomNumber}</td>
                  <td className="p-2 capitalize">{room.roomType}</td>
                  {/* <td className={`p-2 ${statusStyles[room.roomStatus] || 'text-gray-500'}`}>
                    {room.roomStatus}
                  </td> */}
                  <td className="p-2 text-gray-600 capitalize">{room.roomTitle}</td>
                  <td className="p-2 text-gray-600 capitalize">{room.roomPrice}</td>
                  <td className="p-2 text-gray-600 capitalize">{room.roomAvailability == Boolean(0)?"False":"True"}</td>
                  <td className="flex gap-4 mb-3">
        
 <Link to={`/admin/update/${room?._id}`}
className={`mt-6 w-full  text-white px-2 cursor-pointer rounded-3xl
       py-3 bg-emerald-500 hover:bg-blue-500`}>
          Update Now
            
       </Link>
      
          
          </td>

                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default Admindashboard