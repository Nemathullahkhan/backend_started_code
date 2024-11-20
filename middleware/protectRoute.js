import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user";
dotenv.config();

const protectRoute = async(req,res,next)=>{
   try {
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({error:"Unauthroized - Not provided"});
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);

    if(!decoded){
        return res.status(401).json({error:"Unauthroized - Not provided"});
    }

    const user = await User.findById({userId:decoded._id}).select("-password");

    if(!user){
        return res.status(404).json({error:"User not found"});
    }

    req.user = user;
    next();
   } catch (error) {
        console.log("Error at protect Route",error.message);
        return res.status(500).send("Internal Server error");
        
   }
}

export default protectRoute;