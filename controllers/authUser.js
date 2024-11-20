import User from "../models/user.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signUp = async(req,res)=>{
    const {username,password,firstName,lastName,gender}= req.body;
    try{
        const user = await User.findOne({username});
        if(user){
            return res.status(400).send("Already a user with the existing username");
        }
        // HASHING  THE PASSWORD
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
            username,
            password:hash,
            firstName,
            lastName,
            gender
        })
        if(newUser){
            await newUser.save();
            generateTokenAndSetCookie({userId:newUser._id,res});
        }
        res.status(201).send(newUser);
    }catch(error){
        console.log("Error in signup controller",error.message);       
        return res.status(500).json({error:"Internal Server Error"});
    }
}
export const signIn = async(req,res)=>{
    const {username,password} = req.body;
    try {
            //1. checking if the user exist or not 
            const user = await User.findOne({username});
            if(!user){
                return res.status(404).send("Invalid credentials! Please check again");
            }
            //2 checking if the password is correct or not 
            const checkPassword =  bcrypt.compareSync(password, user.password);
            if(!checkPassword){
                return res.status(400).send("Invalid password");
            }
            generateTokenAndSetCookie({userId:user._id,res});
            return res.send("Log-in succesfully");
            } catch (error) {
                console.log("Error at signIn controller",error.message);
                return res.status(500).send("Internal Server Error!");
        }
}
export const signOut = async(req,res)=>{
    try{
        res.cookie("jwt","",{
            maxAge:0
        });
        return res.status(200).send("Log out successfully");
    }catch(error){
        console.log("Error at signOut controller",error.message);
        return res.status(500).send("Internal Server Error");
    }
}

// What is protect route? ->1. It is a middleware which protects the route (req,res,next ) on the jwt tokens and cookies 
// it will check whether the token is present in the localstorage