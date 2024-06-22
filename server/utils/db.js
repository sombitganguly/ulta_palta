const mongoose = require('mongoose');

URI = "mongodb+srv://sgrtgly:Q5huIQwVPBUKMcAH@cluster0.gc941ix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("successfully connected to DB");
    }
    catch(err){
        console.log("error occured");
        process.exit(0);
    }
}

module.exports = connectDB;
