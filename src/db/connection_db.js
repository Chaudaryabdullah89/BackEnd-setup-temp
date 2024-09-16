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
// export async function connectToDatabase() {
//     try {
//       const mongoUri = process.env.MONGO_URI;
//       if (!mongoUri) {
//         throw new Error('MONGO_URI is not defined in the environment variables');
//       }
//       await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
//       console.log('Connected to MongoDB');
//     } catch (err) {
//       console.error('Error connecting to MongoDB', err);
//       throw err;
//     }
//   }
export default connectToDatabase;

