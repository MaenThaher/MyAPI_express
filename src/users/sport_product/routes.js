const {Router } = require('express')
const controller = require('./controller_users')

const router = Router()


router.post('/:id/sport_product',controller.addSport)
router.delete('/:id/sport_product/:id_pr')
router.delete('/:id')
module.exports = router


