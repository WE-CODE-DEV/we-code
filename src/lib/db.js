import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
 if(mongoose.connections[0].readyState){
    return true;
 }

 try{
    await mongoose.connect(MONGODB_URI);;
    console.log('MongoDB connected');
    return true;
 } catch (error){
    console.log(error);
    throw new Error('Database connection failed');
 }
}

export default connectDB;