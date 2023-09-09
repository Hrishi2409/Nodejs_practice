const express = require('express');
const path = require('path');
const {join} = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
const randomInt = require('./randomFile');






// fs.stat
/*Sometimes you may need to know some characteristics of a fi le like its size, creation time, or 
permissions. You can query some meta-information on a fi le (or directory) by using the fs.stat
function */
fs.stat('./files', function(err, stats) {
 if (err) { throw err;}//shows error if any error occurs.
 console.log(stats);
 console.log(stats.isFile('./files')); // shows false since it is a directory not a file.
 console.log(stats.isDirectory('./files')) // shows true since it is a directory.


});


app.all('*',(req,res)=>{
    console.log(randomInt);

})

// server listening in localhost:3000
app.listen(port,()=>{
    console.log("server started");
})