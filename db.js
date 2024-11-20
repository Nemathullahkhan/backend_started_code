import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connect = async()=>{
    const MONGO_URL = process.env.MONGO_URL;
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to the database");
        
    }catch(err){
        console.log("Error while connecting to the database ",err.message);
        
    }
};

export default connect;