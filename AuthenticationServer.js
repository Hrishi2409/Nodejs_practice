


const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app =express();
let users = [];

// app.use((req,res,next)=>{
//     console.log("In comes a " + req.method + " to " + req.url);
//     next();
// })
// app.use((req,res,next)=>{
//     var minutes = (new Date()).getMinutes();
//     console.log(minutes);
//     if(minutes % 2 ===0){
//         next();
//     }
//     else{
//         res.status(403);
//         res.end('Not authorized');
//     }
// })
// app.use((req,res,next)=>{
//     res.send("Successfully logged in.")
// })

//authentication

//POST route to signUp 

app.post('/signup',(req,res)=>{

    var user = req.body;
    let userExists = false
    for(var i=0;i<users.length;i++){
        if(users[i].email === user.email){
            userExists=true;
            break;
        }
    }
    if(userExists){
        res.send(" User already exist try to logIn ");
    }
    else{
        users.push(user);
        res.status(201).send(" Sign up Successfull ");
        console.log(users);
    }
})

//POST  login route for users to login 

app.post('/login',(req,res)=>{
    var user = req.body;
    let userPresent = null;
    for(var i=0;i<users.length;i++){
        if(users[i].email===user.email && users[i].password === user.password){
                userPresent = users[i];
                break;
        }
    }
    if(userPresent){
        res.json({
            firstName:userPresent.firstName,
            lastName:userPresent.lastName,
            email:userPresent.email
        })
    }
    else{
        res.sendStatus(401).send(" Unauthorized access ");
    }

})

// GET route for authentication 
app.get('/data',(req,res)=>{
    var email = req.headers.email;
    var password = req.headers.password;
    let userFound = false;
    for(var i=0;i<users.length;i++){
        if(users[i].email === email && users[i].password === password){
            userFound = true;
            break;
        }
    }
    if(userFound){
        let userDetails = [];
        for(var i = 0;i<users.length;i++){
            usersDetails.push({
                firstName: users[i].firstName,
                lastName: users[i].lastName,
                email: users[i].email
            });
        }
        res.send(JSON.stringify(usersDetails));
    }
    else{
        res.status(400).send("User not found");
    }
})


app.listen(3000,()=>{
    console.log(`Server started at port ${port}`);   
});