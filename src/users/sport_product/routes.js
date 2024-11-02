const {Router } = require('express')
const controller = require('./controller_users')

const router = Router()


router.post('/:id/sport_product',controller.addSport)
router.delete('/:id_pr',controller.delete_sport_product) //delete depend on sp_id
router.patch('/:id_pr',controller.patchProduct)
module.exports = router


