const pool = require('../../../db')
const queries = require('./queries_transaction.js')


const getSpesificTrans =(req,res)=>{
const {id_trans} = req.params

pool.query(queries.getSpecificTransactions, [id_trans], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    
});

}

module.exports = {
    getSpesificTrans
}