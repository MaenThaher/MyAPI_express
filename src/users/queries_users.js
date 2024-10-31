const get_users = "select * from users"
//const add_sport = "insert into sport_product (fullname,duration,per_day,star_product,more_info,is_rented,delivery,users_fk) values('run_counter',3,10,8,'can reach 3 m/s',false,false,1);"
const getUsersById = "select * from users where user_id = $1"
const checkUsernameExists ="select * from users where username = $1"
const addUsers = "insert into users(fullname,email,username,password,birthdate) values ($1,$2,$3,$4,$5)"
module.exports ={
    get_users,
    getUsersById,
    checkUsernameExists,
    addUsers    
}
