import jwt from 'jsonwebtoken';

export const generateToken=(user)=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"5d"})
}

export const verifyToken=(token)=>{
    
    const user=jwt.verify(token,process.env.JWT_SECRET)

    
    return user
}