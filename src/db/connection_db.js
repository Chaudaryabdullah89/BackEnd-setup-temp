import express from "express";
import mongoose from "mongoose";
const app = express();



const connectToDatabase = async() => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("Request For the connection to the database has sended sucessfully");


    }
    catch(err){
        console.log("Error connecting to MongoDB", err);
        process.exit(1);
    }
}

export default connectToDatabase;

