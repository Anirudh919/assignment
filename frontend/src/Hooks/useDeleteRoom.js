import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { removeRoom } from "../Store/Actions"


export function useDeleteRoom(){

    
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    
    

const DeleteRoom=async(id)=>{

    setLoading(true)

    try {
        const res=await fetch(`/api/rooms/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            
        })
        
        const data=await res.json()
        
        
        if( data.success !=true) throw new Error(data.message);
        
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


return{DeleteRoom,loading}



}