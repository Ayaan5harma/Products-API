const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db/connect");
const productmodel = require("./models/project");

const JSONdata = require("./product.json");
const start=async()=>{

    try {
      await  connectDB(process.env.MONGODB_URI);
      await  productmodel.create(JSONdata);
        console.log("data saved to database sucessfully") ;
    } catch (error) {
        console.log(error);
    }
    
    
}

start();