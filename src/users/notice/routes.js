const {Router } = require('express')
const controller = require('./controller_notice')

const router = Router()

router.get('/',controller.getAll_notice)
router.get('/:id_notice',controller.getSpesific_notice)
router.post('/',controller.addSpesific_notice)
router.patch('/:id_notice',controller.updateSpesific_notice)


module.exports = router
