import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setUser } from "../Store/Actions"

export function useLogin(){

    
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    
    

const Login=async(payload)=>{

    setLoading(true)

    try {
        const res=await fetch("/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {user,error}=await res.json()
        
        
        if(!user || error) throw new Error(error);
        
        else
        {   toast.success(`Welcome ${user?.name}`,{
            duration: 6000,
          })
            // setUser(user);
            
            dispatch(setUser(user))
            localStorage.setItem("authInfo",JSON.stringify(user))
            
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


return{Login,loading}



}