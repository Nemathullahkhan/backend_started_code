import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    }
},{timestamps:true});

const User = mongoose.model("user",userSchema);

export default User;