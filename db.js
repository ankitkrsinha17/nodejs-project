import mongoose from "mongoose";
const Connection = async () => {
    const URL = 'mongodb+srv://dbuser:1234@cluster0.5v4vqg6.mongodb.net/?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser: true});
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Error while connecting with database", error);
    }
}
export default Connection;