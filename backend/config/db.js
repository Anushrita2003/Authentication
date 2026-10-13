
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
        throw error;
    }
};

export default connectDB;
