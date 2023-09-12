const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');


var todos = [];

app.use(cors())
app.use(express.json());


//callback functions 
// findIndex callback function returns the index of a todo.
function findIndex(arr,id){
    for(var i=0;i<length;i++){
        if(arr[i].id===id){
            return i;
        }
    }
    return -1;
}
// removeIndex callback function to remove the todo of a respective id.
function removeIndex(arr,index){
    let newArr = [];
    for(var i=0;i<arr.length;i++){
        if(i!==-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;  
}
//Routes
//Route GET all todos
app.get('/todos',(req,res)=>{
    res.json(todos);
})

// Route GET todos with id /todos/:id
app.get('/todos/:id',(req,res)=>{
    const id = findIndex(todos,parseInt(req.params.id));
    if(id===-1){
        res.status(404).send('Todo not found');
    }
    else{
        res.json(todos[id]);
    
    }
})

// Route POST add new todo to the todos array
var ctr=0;
app.post('/todos',(req,res)=>{
    
    const newTodo = {
        id: ctr++, // unique random id
        title: req.body.title,
        description: req.body.description
      };
      todos.push(newTodo);
      res.status(201).json(newTodo).sendFile(path.join(__dirname + "/index.html"));
})

// Route DELETE to delte a specific route 
app.delete("/todos/:id",(req,res)=>{
    const index = findIndex(todos,parseInt(req.params.id));
    if(index === -1){
        res.status(404).send();
    }
    else{
        todos=removeIndex(todos,parseInt(req.params.id));
        res.status(201).send();
    }
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(3000,()=>{
    console.log(`Server has started at port ${3000}`)
});