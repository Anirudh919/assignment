import React from 'react'

 export async function useGetRoombyId(roomId){
    const [room,setRoom]=React.useState(null)
    const [loading,setLoading]=React.useState(true)

    const getRoomById=async()=>{
        try{
            setLoading(true)
            const res=await fetch(`/api/products/category/${productId}`,{
                headers:{
                    "content-Type":"application/json"
                }
            });
            const data=await res.json()
            setRoom(data.room)
            
        }catch(error){
            console.error("Error fetching room:", error)
        }finally{
            setLoading(false)
        }
    }


    return {room,getRoomById,loading} }


    
    
        
            
    