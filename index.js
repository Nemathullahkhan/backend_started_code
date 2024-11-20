import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import routerHandler from "./routes/index.js"
import connect from "./db.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/",routerHandler);

app.listen(PORT,()=>{
    connect();
    console.log(`Server is listening at ${PORT}`);
    
})