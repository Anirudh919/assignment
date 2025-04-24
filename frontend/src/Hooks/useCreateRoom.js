import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { createRoom } from "../Store/Actions"


export function useCreateRoom(){

    
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    
    

const CreateRoom=async(payload)=>{

    setLoading(true)

    try {
        const res=await fetch(`/api/rooms/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
            
        })
        
        const data=await res.json()
        
        
        if(!data.newRoom || data.success !=true) throw new Error(data.message);
        
        else
        {   toast.success(data.message)
        
            
            dispatch(createRoom(data?.room))
        
            
        }
        
    } catch (error) {
        
        toast.error(error.message
          )
      
        return error.message
        
    }
    finally{
        setLoading(false)
    }
  

}


return{CreateRoom,loading}



}