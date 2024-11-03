const pool = require('../../../db')
const queries = require('./queries_notice')


const getAll_notice=(req,res)=>{
    pool.query(queries.getAllNotice,(error,results)=>{
        if(error) throw error;        
        res.status(200).json(results.rows);
    })
}


module.exports = {
    getAll_notice,
    
}