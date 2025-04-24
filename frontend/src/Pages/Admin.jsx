import React, { useState } from 'react'


import { IoMdHome } from "react-icons/io";
import { MdBedroomParent } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaConciergeBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import CreateRooms from '../Components/CreateRooms';
import Admindashboard from '../Components/Admindashboard';

function AdminPage() {
   
    const [activeTab,setActiveTab]=useState("home")



  return (
    <div className="flex min-h-screen bg-[#1e1e2f]">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1e1e2f] text-white shadow-md">
        
        <nav className="space-y-2 p-4 ">
          <button
          onClick={()=>setActiveTab("home")}
          className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600">
          <IoMdHome/>
             Home</button>
          <button onClick={()=>setActiveTab("rooms")}
           className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600 "><MdBedroomParent/>Room</button>
          <button className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600"><FaUser/> Guest</button>
          <button className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600"><FaCalendarAlt/>Booking</button>
          <button className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600"><FaMessage/> Message</button>
          <button className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600"><FaConciergeBell/> Concierge</button>
          <button className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-600"><IoIosSettings/>
 Settings</button>
        </nav>
       
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input type="text" placeholder="Search here" className="border px-4 py-2 rounded w-1/3" />
          <div className="flex items-center gap-4">
            <button>🔔</button>
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/30" className="rounded-full w-8 h-8" alt="Profile" />
              <span className="text-sm text-gray-700">Anya Tilian</span>
            </div>
          </div>
        </div>

        {/* Room Header */}
        

        {/* Room Form */}
        
        {activeTab == "home" ?(<CreateRooms/>):(<Admindashboard />)}
       
      </main>
    </div>
  );
};

export default AdminPage

