const pool = require('../../../db')
const queries = require('./queries_onuser')



const getLogIn = (req,res) => {
 const {username,password}=req.body
//  res.send("username in getLog in is: "+username)
 pool.query(queries.getLogIn ,(error,results)=>{
 if(error) throw error;
  for(let i =0;i<results.rows.length;i=i+1) {
  if((results.rows[i].username === username)&&(results.rows[i].password === password)){
 
 res.send("true")
 return;
 //    res.redirect("/myMainPage")
  }

  }
 
  res.send("false")
  
 ///

 
})
 
}


const getUsers = (req,res)=>{
    pool.query(queries.get_users,(error,results)=>{
        if(error) throw error;        
        res.status(200).json(results.rows);
    })
}
///////
const getUsersById =(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows)
    })
}
//////
const addUsers = (req,res)=>{
    const {fullname,email,username,password,birthdate}=req.body
    //check if fullname not null
    if(fullname === null){
        res.send("Fullname is required")
        return
    }
    //check if email not null
    if(email === null){
        res.send("Email is required")
        return
    }
    //check if username not null
    if(username === null){
        res.send("Username is required")
        return
    }
    //check if password not null
    if(password === null){
        res.send("Password is required")
        return
    }
    //check if birthdate not null
    if(birthdate === null){
        res.send("Birthdate is required")
        return
    }
 
    //check if username exist
    pool.query(queries.checkUsernameExists,[username],(error,results)=>{
     
        if(results.rows.length>0){
            res.send("Username already exists")
        return
        }
      //add user to database
         pool.query(queries.addUsers,[fullname,email,username,password,birthdate],(error,results)=>{
         if(error) throw error;
         res.status(201).send("User added successfully!")
         console.log("User created")
    
         })
    });
    
    };
/////////
const deleteUsers = (req,res)=>{
    const {id}=req.params
 
 pool.query(queries.deleteSportProduct_byUserId,[id],(error,results)=>{
    if(error) throw error; 

    pool.query(queries.deleteUsers,[id],(error,results)=>{
        if(error) throw error;
        res.send("User deleted successfully!")
    })
 })
 
}
////////////
const updateUsers=(req,res)=>{
    const {id}=req.params
    const {fullname,email,username,password,birthdate}=req.body
    
    pool.query(queries.update_users,[id,fullname,email,username,password,birthdate],(error,results)=>{
        if(error) throw error;
        res.send("User updated successfully!")
    })
 
}
////////////
module.exports={
    getUsers,
    getUsersById,
    addUsers,
    deleteUsers,
    updateUsers,
    getLogIn,
    
}