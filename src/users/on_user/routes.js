const {Router } = require('express')
const controller = require('./controller_onuser')

const router = Router()

router.get('/',controller.getUsers)
router.get('/:id',controller.getUsersById)
router.post('/',controller.addUsers)
router.delete('/:id',controller.deleteUsers)
router.patch('/:id',controller.updateUsers)

module.exports = router
