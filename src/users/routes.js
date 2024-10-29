const {Router } = require('express')
const controller = require('./controller_users')

const router = Router()

router.get('/',controller.getUsers)


module.exports = router
