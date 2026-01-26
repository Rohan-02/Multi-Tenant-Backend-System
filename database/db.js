const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(err){
        throw new Error("Database connection failed");
    }
}

module.exports = connectDB;