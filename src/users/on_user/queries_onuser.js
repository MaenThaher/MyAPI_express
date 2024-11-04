const get_users = "select * from users"
const getUsersById = "select * from users where user_id = $1"
const checkUsernameExists ="select * from users where username = $1"
const addUsers = "insert into users(fullname,email,username,password,birthdate) values($1,$2,$3,$4,$5)"
const deleteUsers = "delete from users where user_id = $1"
const deleteSportProduct_byUserId = "delete from sport_product where users_fk = $1"
const update_users = "update users set user_id = user_id,fullname=$2,email=$3,username=$4,password=$5,birthdate=$6 where user_id=$1"

module.exports ={
    get_users,
    getUsersById,
    checkUsernameExists,
    addUsers,
    deleteUsers,
    deleteSportProduct_byUserId,  
    update_users,
    
}