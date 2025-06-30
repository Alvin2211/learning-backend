import 'dotenv/config'  

import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

const app = express();

connectDB()
.then(()=>{
    app.on('error',(error)=>{
        console.log("ERROR OCCURED: ",error);
        throw error
    })

    app.listen(process.env.PORT ||8000 , ()=>{
        console.log(`App is listening on port ${process.env.PORT || 8000}`);
    })
})

.catch((error)=>{
    console.log("ERROR OCCURED: ",error);
    throw error
})















//IFFE 
/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})
*/