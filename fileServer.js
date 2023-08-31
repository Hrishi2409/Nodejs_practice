
const express = require('express');
const fs = require('fs');
const path = require('path');
const {join} = require('path');
const app = express();
const port = 3000;

//function that retrieves files from the file folder 
app.get('/files',(req,res)=>{
  fs.readdir(path,join(__dirname,'./files/'),(err,files)=>
  {
      if(err){
          return res.status(500).json({error:'failed to retrieve files'});
      }
  
      res.sendFile(files);
  })
});

//gets files by filename given in the route parameters
app.get('/files/:filename',(req,res)=>{
  const filepath = path.join(__dirname,'./files/',req.params.filename)
  fs.readFile(filepath,  {encoding:'utf8'}, (err, data) => {
      if (err) {
        return res.status(404).send('File not found');
      }
      res.send(data);
    });
});

//for all other routes
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });