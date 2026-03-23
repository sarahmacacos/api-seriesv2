const express = require('express')
const router = express.Router()

const controller = require('../controllers/seriesController')

router.post('/', controller.criarSerie)
router.get('/', controller.listarSeries)
router.get('/:id', controller.buscarSerie)

module.exports = router