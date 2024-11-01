const get_users = "select * from users"
const getUsersById = "select * from users where user_id = $1"
const checkUsernameExists ="select * from users where username = $1"
const addUsers = "insert into users(fullname,email,username,password,birthdate) values($1,$2,$3,$4,$5)"

module.exports ={
    get_users,
    getUsersById,
    checkUsernameExists,
    addUsers
}