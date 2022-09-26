const express = require("express");
const path = require("path")
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cors());

//Router Import
const user = require("./routes/userRoute");

app.use("/api/v1" , user);

//for making 1 uri

app.use(express.static(path.join(__dirname,"../frontend/build")));

//for making 1 uri
app.get("*" , (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

app.use(errorMiddleware);

module.exports = app ;
