const checkfullnameExists ="select * from users where fullname = $1"
const checkOwnernameExists = "select * from owner where username = $1"
const checkOwnerEmailExists = "select * from owner where email=$1"
const addSport = "insert into sport_product (fullname,duration,per_day,star_product,more_info,is_rented,delivery,users_fk) values($1,$2,$3,$4,$5,$6,$7,$8);"
const addOwner = "insert into Owner(fullname,email,username,password,birthdate) values($1,$2,$3,$4,$5)"


module.exports={    
    addSport,
    checkfullnameExists,
    addOwner,
    checkOwnernameExists,
    checkOwnerEmailExists    
}
