import bcrypt from "bcryptjs";
import { User } from "../Models/user.model.js";
import { generateToken } from "../JWT/jwt.js";


// signup user
export async function signup(req,res){
    const {name,email,password,role="customer"}=req.body;
    try {
        if(!name || !email ||!password) throw new Error("All fields are requried");

        if(password.length<6) throw new Error("Password must be at least 6 characters  long");

        let user=await User.findOne({email})
        if(user) throw new Error("User already exists with this email")

            // create user

        user=await User.create({name,email,password,role})
        user.salt=bcrypt.genSaltSync(10) 
        user.password=bcrypt.hashSync(user.password,user.salt)  
        await user.save()

        const token=generateToken(user._id)
        res.cookie("token",token)
        //     ,{
        //     httpOnly:true,
        //     secure:true,    
        //     sameSite:"strict",
        //     maxAge:1000*60*60*24*5 // 5 days
        // })

        return res.status(201).json({message:"User created successfully",user,token})

        


        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }

}


// login user
export async function login(req,res){
    const {email,password}=req.body;

    try {
        if(!email || !password) throw new Error("All fields are requried");
        let user=await User.findOne({email})

        if(!user) throw new Error("User not found with this email")
        const isPasswordMatch=bcrypt.compareSync(password,user.password)
        if(!isPasswordMatch) throw new Error("Invalid password")

// generate token and return it in response
const token=generateToken(user._id)
res.cookie("token",token)
//     {
//     httpOnly:true,
//     secure:true,    
//     sameSite:"strict",
//     maxAge:1000*60*60*24*5 // 5 days
// })


            return res.status(200).json({message:"Login successfully",user,token})
        
        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

export async function getUsers(req,res){
    let users=await User.find({}).select("-password -salt")
    return res.status(200).json({users})

}
