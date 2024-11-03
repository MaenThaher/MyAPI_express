const {Router } = require('express')
const controller = require('./controller_transaction')

const router = Router()


router.get('/:id_trans',controller.getSpesificTrans)
module.exports = router


