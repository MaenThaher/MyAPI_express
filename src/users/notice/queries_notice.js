const getAllNotice = "select * from notice"
const getSpesificNotice = "select * from notice where notice_id = $1"
const addSpesificNotice = "insert into notice (transt_id_fk,note_owner,note_rented,punctaulity_day,star_from_rented,star_from_owner) values ($1,$2,$3,$4,$5,$6)"
module.exports = {
    getAllNotice,
    getSpesificNotice,
    addSpesificNotice
}