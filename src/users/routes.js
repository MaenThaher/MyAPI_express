const {Router } = require('express')
const controller = require('./controller_users')

const router = Router()

router.get('/',controller.getUsers)
router.get('/:id',controller.getUsersById)
router.post('/',controller.addUsers)
module.exports = router
