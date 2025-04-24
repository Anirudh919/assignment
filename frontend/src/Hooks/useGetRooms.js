import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast'
import { useState } from "react";
import { setRooms } from "../Store/Actions";

export function useGetRooms() {

    
    const [loading, setLoading] = useState(true);
    const dispatch=useDispatch()
    
    
        const fetchRooms = async () => {
            setLoading(true)
        try {
            const response = await fetch('/api/rooms/'); 
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();

            dispatch(setRooms(data.rooms))
            
             
        } catch (error) {
            toast.error(error.message)
            return error.message
        } finally {
            setLoading(false);
        }
        };
    
        

    
    return {loading,fetchRooms };

}