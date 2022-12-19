const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const myroutes = require("./routes/project")
const connectDB = require("./db/connect");

app.get("/",(req,res)=>{
    res.send("hii this is live")
})

app.use("/api/products",myroutes);

const serverstart= async ()=>{
     
    try {
       await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        }); 
    } catch (error) {
      console.log(error);
    }
}


serverstart();