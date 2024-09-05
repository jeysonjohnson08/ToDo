// function task1(){
//     return new  Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("this is task 1")},4000)
//     })


// }
// function task2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("this is task2")
//         },2000)
//     })
// } 

// function task3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("this is task3");
//         },1000)
//     })
// }

// task1().then((message)=>{console.log(message)}).then((message)=>{console.log(message);}).then((message)=>{console.log(message);}).catch((message)=>{console.log(message);})

const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("okie dokie")
})

app.get('/demo', (req, res, next) => {
    next();

    res.send("first");
    // if (req.params.id == '3') {
    //     next(); // Skip to the next matching route
    // } else {
    //     res.send('ID is not 3');
    // }
});

app.get('/demo', (req, res) => {
    res.send("second");
    //res.send('You reached the second handler with ID 3');
});

app.listen(3000,()=>{console.log('server is listerning to port 3000')})