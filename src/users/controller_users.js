const pool = require('../../db')
const queries = require('./queries_users')


const getUsers = (req,res)=>{
    pool.query(queries.get_users,(error,results)=>{
        if(error) throw error;        
        res.status(200).json(results.rows);
    })
}

const addSport_product = (req,res)=>{
    
}

module.exports={
    getUsers
}

