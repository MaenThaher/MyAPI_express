const getSpecificTransactions = "select * from transaction where trans_id = $1"
//insert into transaction(user_rent_id_fk,user_owner_id_fk,start_date,end_date,fees_platform,delivery,fee_from_renter) values (10,6,'2021-02-03','2022-02-5',6,0,2);

module.exports ={
    getSpecificTransactions
}