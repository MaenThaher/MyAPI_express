const getAllTransactions = "select * from transaction"
const getSpecificTransactions = "select * from transaction where trans_id = $1"
const addSpecificTransactions = "insert into transaction(user_rent_id_fk,user_owner_id_fk,start_date,end_date,fees_platform,delivery,fee_from_renter) values ($1,$2,$3,$4,$5,$6,$7)"
const deleteSpesificTransactions = "delete from transaction where trans_id = $1"
const updateSpesificTransactions = "update transaction set trans_id = trans_id,user_rent_id_fk=$2,user_owner_id_fk=$3,start_date=$4,end_date=$5,fees_platform=$6,delivery=$7,fee_from_renter=$8 where trans_id = $1"

module.exports ={
    getSpecificTransactions,
    addSpecificTransactions,
    deleteSpesificTransactions,
    updateSpesificTransactions,
    getAllTransactions

}