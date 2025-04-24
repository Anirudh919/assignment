import { combineReducers } from "redux";



function UserReducer(state=JSON.parse(localStorage.getItem("authInfo")) || null,actions){
    const {payload,type}=actions

    switch(type){
        case "SET_USER":{
            return state=payload
        }
        
        default:{
            return state
        }
    }
}


function RoomReducer(state=[],actions){
    const {payload,type}=actions
    

    switch(type){
        case "SET_ROOMS":{
            return state=payload
        }
        case "UPDATE_ROOM":{    
            const oldRooms=state.filter((room)=>room._id !== payload._id)
            
            const newRooms=[...oldRooms,payload]
            return state=newRooms

        }
        case "REMOVE_ROOM":{    
            const updatedRooms=state.filter((room)=>room._id !== payload._id)
            
            
            return state=updatedRooms

        }
        case 'CREATE_ROOM':{
            return [...state,payload]
        }
        default:{
            return state
        }
    }
}

export const allReducers=combineReducers({
    UserReducer,RoomReducer
})