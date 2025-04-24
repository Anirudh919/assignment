import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import {  updateRoom } from "../Store/Actions"


export function useUpdateRoom(){

    
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    
    

const UpdateRoom=async(id,payload)=>{

    setLoading(true)

    try {
        const res=await fetch(`/api/rooms/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
            
        })
        
        const data=await res.json()
        
        
        if(!data.room || data.success !=true) throw new Error(data.message);
        
        else
        {   toast.success(data.message)
        
            
            dispatch(updateRoom(data?.room))
        
            
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


return{UpdateRoom,loading}



}