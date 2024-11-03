const pool = require('../../../db')
const queries = require('./queries_notice')


const getAll_notice=(req,res)=>{
    pool.query(queries.getAllNotice,(error,results)=>{
        if(error) throw error;        
        res.status(200).json(results.rows);
    })
}

const getSpesific_notice = (req,res)=>{
    const {id_notice} = req.params
    pool.query(queries.getSpesificNotice,[id_notice],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addSpesific_notice = (req,res)=>{
    const {transt_id_fk,note_owner,note_rented,punctaulity_day,star_from_rented,star_from_owner}=req.body
    pool.query(queries.addSpesificNotice,[transt_id_fk,note_owner,note_rented,punctaulity_day,star_from_rented,star_from_owner],(error,results)=>{
        if(error) throw error;
        res.status(200).json("added successfully");
    })
}
const updateSpesific_notice=(req,res)=>{
    const {id_notice}=req.params
    const {transt_id_fk,note_owner,note_rented,punctaulity_day,star_from_rented,star_from_owner}=req.body
    pool.query(queries.updateSpesificNotice,[id_notice,transt_id_fk,note_owner,note_rented,punctaulity_day,star_from_rented,star_from_owner],(error,results)=>{
        if(error) throw error;
        res.status(200).json("updated successfully");
    })
}


module.exports = {
    getAll_notice,
    getSpesific_notice,
    addSpesific_notice,
    updateSpesific_notice

}