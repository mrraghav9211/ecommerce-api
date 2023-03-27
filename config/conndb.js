const mongoose = require("mongoose");

const connectDB = async (req, res)=>{
    try {
        mongoose.set("strictQuery", false)
        mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected:")
    } catch (err) {
        console.log(err.message);
        process.exit();
    }
}
module.exports = connectDB;