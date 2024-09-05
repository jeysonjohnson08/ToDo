 require('./db/connect')
const express = require("express")
const app = express()

const tasks = require("./routes/tasks")
app.use(express.json())
app.use("/api/v1/tasks", tasks)

app.get("/",(req,res)=>{
    res.send("okiedokie")
})


app.listen(3000,()=>{console.log('server is listerning to port 3000')})