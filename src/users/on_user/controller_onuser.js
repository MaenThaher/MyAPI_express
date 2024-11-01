const pool = require('../../../db')
const queries = require('./queries_onuser')



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
module.exports={
    getUsers,
    getUsersById,
    addUsers
}