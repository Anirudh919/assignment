import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { removeRoom, updateRoom } from "../Store/Actions"


export function useRemoveRoom(){

    
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    
    

const RemoveRoom=async(id)=>{

    setLoading(true)

    try {
        const res=await fetch(`/api/rooms/cancel/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            
        })
        
        const data=await res.json()
        
        if(!data.room || data.success !=true) throw new Error(data.message);
        
        else
        {   toast.success(data.message)
        
            
            dispatch(removeRoom(data?.room))
        
            
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


return{RemoveRoom
    ,loading}



}