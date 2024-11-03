const getAllNotice = "select * from notice"
const getSpesificNotice = "select * from notice where notice_id = $1"
module.exports = {
    getAllNotice,
    getSpesificNotice
}