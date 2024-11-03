const getAllNotice = "select * from notice"
const getSpesificNotice = "select * from notice where notice_id = $1"
const addSpesificNotice = "insert into notice (transt_id_fk,note_owner,note_rented,punctaulity_day,star_from_rented,star_from_owner) values ($1,$2,$3,$4,$5,$6)"
const updateSpesificNotice="update notice set notice_id = notice_id,transt_id_fk=$2,note_owner=$3,note_rented=$4,punctaulity_day=$5,star_from_rented=$6,star_from_owner=$7 where notice_id = $1"
module.exports = {
    getAllNotice,
    getSpesificNotice,
    addSpesificNotice,
    updateSpesificNotice
}