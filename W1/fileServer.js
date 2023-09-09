
const express = require('express');
const fs = require('fs');
const path = require('path');
const {join} = require('path');
const app = express();
const port = 3000;

//function that retrieves files from the file folder 
app.get('/files',(req,res)=>{
  const filePath = path.join(__dirname,'./files/');
  fs.readdir(filePath,'utf-8',(err,files)=>
  {
      if(err){
        console.log(err.message);
          return res.send({error:'failed to retrieve files'});
      }
      
      files.forEach(function(file){
        const json = new Array(file);
        res.send(json);
      }) 
      
  })
});

//gets files by filename given in the route parameters
app.get('/files/:filename',(req,res)=>{
  const params = encodeURIComponent(req.params.filename);
  const filepath = path.join(__dirname,'./files/',params)
  fs.readFile(filepath,  {encoding:'utf8'}, (err, data) => {
      if (err) {
        console.log(err.message);

        return res.status(404).send('File not found');
      }
      const json = JSON.stringify(data);
      res.send(json);
    });
});

//for all other routes
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });