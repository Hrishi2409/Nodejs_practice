const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fs =require("fs");


app.use(bodyParser.json());
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
app.get('/todos', (req, res) => {
    fs.readFile("Todos.json", "utf8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

// Route GET todos with id /todos/:id
app.get('/todos/:id',(req,res)=>{
    fs.readFile("Todos.json", "utf8", (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        if (todoIndex === -1) {
          res.status(404).send();
        } else {
          res.json(todos[todoIndex]);
        }
      });
})

// Route POST add new todo to the todos array
var ctr=0;
app.post('/todos',(req,res)=>{
    
    const newTodo = {
        id: ctr++, // unique random id
        title: req.body.title,
        description: req.body.description
      };
      fs.readFile("todos.json", "utf8", (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
          if (err) throw err;
          res.status(201).json(newTodo);
        });
      });
})

// Route DELETE to delte a specific route 


// middleware for all other routes to show "No page found " for invalid routes .
app.use('/',(req,res,next)=>{
    res.status(404).send("NO page found");
})
app.listen(3000,()=>{
    console.log(`Server has started at port ${3000}`)
});