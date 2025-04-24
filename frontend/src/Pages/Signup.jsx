import React from 'react'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash, FaRegUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useSignup } from '../Hooks/useSignup'
import { Link } from 'react-router-dom'


const Signup = () => {
  const [isView,setIsView]=useState(false)

  const{signup,loading}=useSignup()
    const [inputs,setInputs]=useState({
      email:"",
      name:"",
      password:""
    })
  
    return(
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800   relative -top-20 text-white rounded-2xl shadow-lg p-10 w-full max-w-md">
          
          <h1 className="text-3xl font-bold mb-6 capitalize">
          Create new account<span className="text-blue-500">.</span>
          </h1>
          <p className="text-sm text-gray-400 mb-6 capitalize">
          Already A Member? <Link to="/login"  className="text-blue-400 hover:underline">login</Link>
          </p>
      
          <div className="mb-1">
            <MdEmail className='relative top-[1.65rem] right-6 ml-auto text-gray-400' size={14}/>
            <input  value={inputs.email} onChange={(e)=>setInputs({...inputs,email:e.target.value})}
            type="email" placeholder="Email" className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
          <FaRegUser 
           className='relative top-[1.65rem] right-6 ml-auto text-gray-400' size={14}/>
            <input type="text" value={inputs.name} onChange={(e)=>setInputs({...inputs,name:e.target.value})}
             placeholder="Username" className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
      
          <div className="mb-6">
            <div className="relative top-[.8rem] left-[20.75rem]   text-gray-400 cursor-pointer" onClick={()=>setIsView(!isView)}>
                                                {isView? (
                                           <FaRegEye size={16} className='absolute ' />
                                     ):
                                            (<FaRegEyeSlash size={16}  className='absolute  border-red-500'/>)}
           </div>  
            <input value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}
             type={`${isView? `text`:`password`}`}placeholder="Password" className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
      
          <div className="flex justify-between gap-4">
      
            <button
            onClick={()=>signup(inputs)}
            className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2 rounded-lg transition-all duration-200">
            {loading ? 
             
             "Loading...":
              "Create account"}
            </button>
          </div>
        </div>
      </div>
      
  )
}

export default Signup
