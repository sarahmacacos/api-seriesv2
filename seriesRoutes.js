const express = require('express');
const router = express.Router();

const controller = require('./seriesController');

router.get('/', controller.listarSeries);
router.get('/:id', controller.buscarSerie);
router.post('/', controller.criarSerie);
router.put('/:id', controller.atualizarSerie);   
router.delete('/:id', controller.deletarSerie);   

module.exports = router;