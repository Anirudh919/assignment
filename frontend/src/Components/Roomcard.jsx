import { Link } from "react-router-dom";

export  function Roomcard(room){        
    
    
    return(
          <Link to={`/roomdetails/${room?._id}`} className="bg-[#2c2c3e] rounded-2xl overflow-hidden cursor-pointer">
          <img
        src={(room?.roomImg)? room?.roomImg:"https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"} 
               alt={room?.roomTitle}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold capitalize">{room?.roomTitle}</h2>
               
              </div>
              <p className="text-sm text-gray-400 mb-2 capitalize">Type : {room?.roomType}</p>
              <p className="font-bold text-white text-right">₹ {room?.roomPrice} <span className="text-sm text-gray-400"> / 24hrs</span></p>
            </div>
          </Link>
    )}
         
 