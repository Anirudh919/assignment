
import React, { useRef, useState } from 'react'

import { CATEGORIES } from "../Constants/index.js";
import { useCreateRoom } from '../Hooks/useCreateRoom.js';
function CreateRooms() {
  
    const [roomInputs, setRoomInputs] = useState({
        roomImg:  "",roomNumber: 0,
        roomType: "",
        roomTitle:   "",
        roomDescription: "",
        roomPrice: "",roomAvailability: true
    
    })

    const {CreateRoom}=useCreateRoom()
    
    

    return (
     


<div className="bg-white p-6 rounded-lg shadow-md space-y-6"><div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold capitalize">create new Room:</h2>
          
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
  <button className="px-4 py-2 border rounded text-gray-700"
  >Cancel</button>
  <button className="px-4 py-2 bg-green-600 text-white rounded" 
  onClick={()=>{CreateRoom(roomInputs);setRoomInputs( {roomImg:  "",roomNumber: 0,
    roomType: "",
    roomTitle:   "",
    roomDescription: "",
    roomPrice: "",roomAvailability: true})}}
>Save Changes</button>
</div>
</div>   )
}

export default CreateRooms