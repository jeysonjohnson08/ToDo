 const connectDB = require('./db/connect')
require("dotenv").config()
const notfound = require("./middleware/notfound")

const express = require("express")


const app = express()

const port = 3000;
app.use(notfound);
const tasks = require("./routes/tasks")
app.use(express.static("./public"))
app.use(express.json())
app.use("/api/v1/tasks", tasks)



const start = async()=>{
    try{
await connectDB(process.env.MONGO_URI);
app.listen(port,()=>{console.log('server is listerning to port 3000')})}
catch(error){
    console.log(error);
}
}

start()


