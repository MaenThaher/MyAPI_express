const pool = require('../../../db')
const queries = require('./queries_transaction.js')


const getSpesificTrans =(req,res)=>{
const {id_trans} = req.params

pool.query(queries.getSpecificTransactions, [id_trans], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    
});

}

const addSpesificTransaction = (req,res)=>{
    const {user_rent,user_owner,start_date,end_date,fees_platform,delivery,fee_from_renter}=req.body
   
    pool.query(queries.addSpecificTransactions,[user_rent,user_owner,start_date,end_date,fees_platform,delivery,fee_from_renter], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        
    });


}

const deleteSpesificTransaction = (req,res)=>{
    const {id_trans} = req.params
    pool.query(queries.deleteSpesificTransactions, [id_trans], (error, results) => {
        if (error) throw error;
        res.status(200).json("delted successfully");
        
    });
}

const updateSpesificTransaction = (req,res)=>{
    const {id_trans} = req.params;
    const {user_rent,user_owner,start_date,end_date,fees_platform,delivery,fee_from_renter}=req.body
res.send("id_trans: "+id_trans+" user_owner: "+user_owner)
    pool.query(queries.updateSpesificTransactions,[id_trans,user_rent,user_owner,start_date,end_date,fees_platform,delivery,fee_from_renter], (error,results) => {
        if (error) throw error;
        res.status(200).json("updated successfully"); 

    })        
}



module.exports = {
    getSpesificTrans,
    addSpesificTransaction,
    deleteSpesificTransaction,
    updateSpesificTransaction
}