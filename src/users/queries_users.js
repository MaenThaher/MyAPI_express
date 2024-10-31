const get_users = "select * from users"
const getUsersById = "select * from users where user_id = $1"
const checkUsernameExists ="select * from users where username = $1"
const checkfullnameExists ="select * from users where fullname = $1"
const addUsers = "insert into users(fullname,email,username,password,birthdate) values($1,$2,$3,$4,$5)"
const addSport = "insert into sport_product (fullname,duration,per_day,star_product,more_info,is_rented,delivery,users_fk) values($1,$2,$3,$4,$5,$6,$7,$8);"


module.exports={
    get_users,
    getUsersById,
    checkUsernameExists,
    addUsers,
    addSport,
    checkfullnameExists    
}
