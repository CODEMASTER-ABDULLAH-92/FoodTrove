import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/Food-App`);
        console.log("Database Connected");
    } catch (error) {
        console.error("Mongodb Error",error);
    }
}

export default connectDb;
