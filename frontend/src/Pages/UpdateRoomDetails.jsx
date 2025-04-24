
import React, { useState } from 'react'

import { CATEGORIES } from "../Constants/index.js";

import { useUpdateRoom } from '../Hooks/useUpdateRoom.js';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDeleteRoom } from '../Hooks/useDeleteRoom.js';
function UpdateRoomsDetails() {
     const {id}=useParams()
     const rooms=useSelector(state=>state.RoomReducer)
     
     const roomData=rooms?.filter(room=>room?._id == id)
     
    const [roomInputs, setRoomInputs] = useState({
        roomImg: roomData[0]?.roomImg || "",roomNumber:roomData[0]?.roomNumber || 0,
        roomType:roomData[0]?.roomType || "",
        roomTitle:  roomData[0]?.roomTitle|| "",
        roomDescription:roomData[0]?.roomDescription || "",
        roomPrice: roomData[0]?.roomPrice || "",roomAvailability:roomData[0]?.roomAvailability? true:false
    
    })
    const {UpdateRoom}=useUpdateRoom()
    const {DeleteRoom}=useDeleteRoom()
    
   
    

    return (
     


<div className="bg-white p-6 rounded-lg shadow-md space-y-6"><div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold capitalize">Update Room Details:</h2>
          
        </div>
{/* Room Images */}
<div>
  <h3 className="font-semibold mb-2">Room Picture</h3>
  <div className="flex gap-3">
    {[1, 2, 3, 4].map((i) => (
      <img key={i} src={`https://picsum.photos/100/80?random=${i}`} alt={`room-${i}`} className="rounded-md object-cover w-24 h-20" />
    ))}
    <div className="w-24 h-20 border-2 border-dashed rounded-md flex items-center justify-center text-gray-400 cursor-pointer hover:border-gray-500">
      + Add Image
    </div>
  </div>
</div>

{/* Room Details */}
<div className="grid grid-cols-3 gap-4">

<div>
    <label className="block text-sm font-medium">Room Title</label>
    <input type="text" placeholder="Room Title" className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomTitle} onChange={(e) => setRoomInputs({ ...roomInputs, roomTitle: e.target.value })} />
  </div>
  <div>
    <label className="block text-sm font-medium">Room Description</label>
    <input type="text" placeholder="About Room" className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomDescription} onChange={(e) => setRoomInputs({ ...roomInputs, roomDescription: e.target.value })} />
  </div>
  <div>
    <label className="block text-sm font-medium">Room Price</label>
    <input type="text" placeholder="1200" className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomPrice} onChange={(e) => setRoomInputs({ ...roomInputs, roomPrice: e.target.value })} />
  </div>

  <div>
    <label className="block text-sm font-medium">Room Number</label>
    <input type="number" placeholder="340" className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomNumber} onChange={(e) => setRoomInputs({ ...roomInputs, roomNumber: e.target.value })} />
  </div>
  <div>
    <label className="block text-sm font-medium">Reservation Status</label>
    <select className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomAvailability} onChange={(e) => setRoomInputs({ ...roomInputs, roomAvailability: e.target.value })}>
      <option value="true" >Not Reserved</option>
      <option value="false">Reserved</option>
    </select>
  </div>
  <div>
    <label className="block text-sm font-medium">Room Type</label>
    <select className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomType} onChange={(e) => setRoomInputs({ ...roomInputs, roomType: e.target.value })}>
      <option value="Deluxe" >Deluxe</option>
      <option value="Standard">Standard</option>
      <option value="suite">suite</option>
      <option value="Family Roomuxe">Family Room</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium">Room Image Link</label>
    <input type="text" placeholder="https://images.upstaash.com/photo-15640d=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxD" className="w-full mt-1 border px-3 py-2 rounded"
    value={roomInputs.roomImg} onChange={(e) => setRoomInputs({ ...roomInputs, roomImg: e.target.value })} />
  </div>
 
  

 
 
</div>




{/* Footer Buttons */}
<div className="flex justify-end gap-2">
  
  <button className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-blue-500" 
  onClick={()=>{alert("Are sure ?"); UpdateRoom(id,roomInputs)}}>Update Changes</button>

<button className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700" 
  onClick={()=>{alert("Want to Delete Room Permanently ?"); DeleteRoom(id)}}>Delete Room</button>

<Link to="/admin" className="border hover:border-red-500 px-4 py-2  rounded text-gray-700">Cancel</Link>
</div>
</div>   )
}

export default  UpdateRoomsDetails
