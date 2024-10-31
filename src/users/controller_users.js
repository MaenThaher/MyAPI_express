const pool = require('../../db')
const queries = require('./queries_users')

///////
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
/////////
const addUsers = (req,res)=>{
const {fullname,email,username,password,birthdate}=req.body
//check if username exist
pool.query(queries.checkUsernameExists,[username],(error,results)=>{
 
    if(results.rows.length>0){
        res.send("Username already exists")
    }
  //add user to database
     pool.query(queries.addUsers,[fullname,email,username,password,birthdate],(error,results)=>{
     if(error) throw error;
     res.status(201).send("User added successfully!")
     console.log("User created")

     })
});

};
///////////////
const addSport = (req,res)=>{
    const {fullname,duration,per_day,star_product,more_info,is_rented,delivery,users_fk}=req.body
    //check if username exist
    pool.query(queries.checkfullnameExists,[fullname],(error,results)=>{
     
        if(results.rows.length>0){
            res.send("this product already exists")
        }
      //add user to database
         pool.query(queries.addSport,[fullname,duration,per_day,star_product,more_info,is_rented,delivery,users_fk],(error,results)=>{
         if(error) throw error;
         res.status(201).send("sport product added successfully!")
         console.log("sport product created")
    
         })
    });
    
    };
//////////
module.exports={
    getUsers,
    getUsersById,
    addUsers,
    addSport
}

