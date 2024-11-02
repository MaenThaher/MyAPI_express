const pool = require('../../../db')
const queries = require('./queries_users')

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
         
         pool.query(queries.getUsersById,[users_fk],(error,results) => {
        //    const {fullname,email,username,password,birthdate}=results.rows
//        res.send(results.rows[0])  
         const  fullname = results.rows[0].fullname
          const  email = results.rows[0].email
         const   username = results.rows[0].username
           const password = results.rows[0].password
         const  birthdate = results.rows[0].birthdate
       //   res.send("fullname: "+fullname+" email: "+email+" username: "+username)
          if (error) {throw error};


        ////

       pool.query(queries.checkOwnernameExists,[results.rows[0].username],(error,results)=>{
       
 // res.send("here 67")
 if(error) throw error;
 
            if(results.rows.length>0){
                res.send("Username already exists")
            return
            }
            
                
            //add Owner to database
            pool.query(queries.addOwner,[fullname,email,username,password,birthdate],(error,results)=>{
             if(error) throw error;
             res.status(201).send("owner added successfully!")
             console.log("owner created")          
         })  
        
        });

         })         
         })
    });    
    };


//////////
const delete_sport_product=(req,res)=>{
    const {id}=req.params
    pool.query(queries.deleteSportProduct,[id],(error,results)=>{
        if(error) throw error;
      
        res.send("product deleted successfully!")
    })
}



////////////
module.exports={
    addSport,
    
}

