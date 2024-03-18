const express = require('express');
const router = express.Router();

const PlanilhaController = require('./controllers/PlanilhaController.js')

router.get('/planilha',PlanilhaController.buscarTodos);

module.exports = router;