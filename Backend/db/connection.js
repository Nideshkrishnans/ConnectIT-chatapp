import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.mongo_db_uri);
        console.log("connected to mongodb");
        
        
    } catch (error) {
        console.log("error connecting to mongoDB", error.message );
        
    }
}

export default connectToMongoDB ;