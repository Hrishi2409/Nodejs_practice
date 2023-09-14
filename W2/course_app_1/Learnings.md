# LEARNING FROM THIS PROJECT 

- This project is not a fullfledged database integrated porject , here i have created  a *Global* Array ( ADMINS,USERS,COURSES ) where all the data is stored.
- For the Authentication i have created two middlewares  
  
``` const adminAuth = (req,res,next)=>{
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
    
``` 

 and 

```

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

```
 where simple authentication is done. 
- `Object.assign(target,source)
  `
- `Array.find()` and `Array.filter()` 
- #### Creating a backend for a course selling website that consist of :-

   - Admin routes where the Admin can Sign-up/Sign-in, add a course , update a course , and get all the courses that are added.
   - User Routes where the user can Sign-up/Sign-in , get courses, get courses with specific CourseId, get all the purchased Courses.
  
- `Math.floor(Math.random()*10000)` → this generates a random number.  
  