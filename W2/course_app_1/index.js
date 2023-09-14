const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// admin authentication middleware 
const adminAuth = (req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = ADMINS.find(a=> a.username=== username && a.password===password);
    if(admin){
        next();
    }
    else{
        res.status(403).json({message:"Admin authentication failed"})
    }
}
//user authentication middleware
const userAuth = (req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const user = USERS.find(u=> u.username=== username && u.password===password);
    if(user){
        req.user = user;
        next();
    }
    else{
        res.status(403).json({message:"User authentication failed"})
    }
}
// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find(a=>a.username === admin.username);
  if(existingAdmin){
    res.status(403).send("Admin already exist");
  }
  else{
    ADMINS.push(admin);
    res.json({message:"Admin created successfully"});
  }
});

app.post('/admin/login',adminAuth, (req, res) => {
  // logic to log in admin
  res.json({ message: 'Logged in successfully' });
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = Math.floor(Math.random()*10000);
  COURSES.push(course);
  res.json({message:"course added successfully",courseId:course.id});
 });

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
  const courseId = req.params.courseId;
  const course = COURSES.find(c=>c.id===courseId);
  if(course){
    Object.assign(course,req.body);// this Object.assign() takes two input target and source copies the source object values into the target object.
   res.json({message:"Course updated successfully!!"});  
  }
  else{
    res.status(404).json({message:"invalid request, course cannot be found"});
  }
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
  res.json({courses:COURSES});
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
  const user = {
    username:req.body.username,
    password:req.body.password,
    purchasedCourses:[]
  }
  USERS.push(user); // ppush the user object values to USERS array(which is a global array).
  res.json({ message: 'User created successfully' });
});

app.post('/users/login', userAuth,(req, res) => {
  // logic to log in user
  res.json({ message: 'Logged in successfully' });
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
  
  
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});