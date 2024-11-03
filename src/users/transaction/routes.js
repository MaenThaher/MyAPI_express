const {Router } = require('express')
const controller = require('./controller_transaction')

const router = Router()


router.get('/:id_trans',controller.getSpesificTrans)
router.post('/',controller.addSpesificTransaction)
router.delete('/:id_trans',controller.deleteSpesificTransaction)
router.patch('/:id_trans',controller.updateSpesificTransaction)


module.exports = router


