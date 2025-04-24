import { useState } from "react"

import {toast } from 'react-hot-toast'
export function useSignup(){

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    

    
const signup=async(payload)=>{
    console.log(payload)

    setLoading(true)

    try {
        const res=await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {user,error}=await res.json()
        if(!user || error) throw new Error(error)
        else
            {
                toast.success(`Welcome ${user?.name}`,{
                    duration: 6000,
                  })
            setUser(user);
            // setAuthUser(user)
            localStorage.setItem("authInfo",JSON.stringify(user))
        }
        
    } catch (error) {
        toast.error(error.message)
              
        return error.message
        
    }
    finally{
        setLoading(false)
    }
  

}


return{signup,user,loading}



}