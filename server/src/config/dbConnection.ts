import mongoose from "mongoose";
import "dotenv/config"

const URL= process.env.MONGODB_URL;
// const MONGODB_URL = "mongodb://127.0.0.1:27017/amazone";

const dbConnect = async () => {
  try {
    
    await mongoose.connect(URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database error:", error.message);
  }
};

export default dbConnect;
