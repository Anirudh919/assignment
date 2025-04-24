import { createContext, useContext, useEffect, useState } from "react";

const RoomContext=createContext()


export const RoomProvider=({children})=>{

    const [rooms,setRooms]=useState([]) 
    const [loading,setLoading]=useState(true)       
    
    
const fetchRooms=async()=>{ 
    try {
        const response=await fetch('/api/rooms') 
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        const data=await response.json()
        setRooms(data.rooms)
        
    }catch(error){
        console.log(error)
    }finally{
        setLoading(false)
    }
}
useEffect(()=>{
        fetchRooms()
},[])


    return(
        <RoomContext.Provider value={{rooms,loading,refetchRooms:fetchRooms}}>{children}</RoomContext.Provider>
    )
}

export const useRoomContext=()=>useContext(RoomContext)