export const setUser=(payload)=>{
    return{
        payload,type:"SET_USER"
    }

}



export const setRooms=(payload)=>{
    return{
        payload,type:"SET_ROOMS"
    }

}


export const updateRoom=(payload)=>{
    
    return{payload,type:"UPDATE_ROOM"}
}

export const removeRoom=(payload)=>{
    return{payload,type:"REMOVE_ROOM"}
}


export const createRoom=(payload)=>{
    return{payload,type:"CREATE_ROOM"}
}