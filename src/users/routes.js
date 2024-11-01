const {Router } = require('express')
const controller = require('./controller_users')

const router = Router()


router.post('/:id/sport',controller.addSport)
router.post("/:id/notice",controller.addNotice)
module.exports = router

