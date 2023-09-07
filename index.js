const express = require('express');
const app = express();
const port =8080;

// function calculateSum(counter){
//     var sum = 0;
//     for(var i =0;i<=counter;i++){
//         sum+=i;
//     }
//     return sum;
// }
// function handleFirstRequest(req,res){
//     var counter = req.query.counter;
    // var counter = 100;
//     var calcSum = calculateSum(counter);
//     var answer = "the sum is " + calcSum;
//     res.send(answer);
// }
// app.get("/",(req,res)=>{ })

// app.get("/handleSum",handleFirstRequest);
    
app.listen(port,()=>{
    console.log(`Server has started at port number ${port}`)
});