const getSpecificTransactions = "select * from transaction where trans_id = $1"
const addSpecificTransactions = "insert into transaction(user_rent_id_fk,user_owner_id_fk,start_date,end_date,fees_platform,delivery,fee_from_renter) values ($1,$2,$3,$4,$5,$6,$7)"

module.exports ={
    getSpecificTransactions,
    addSpecificTransactions
}