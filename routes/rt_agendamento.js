const express = require('express');
const {
    selecionarHorarios,
    criarAgendamento
} = require('../controllers/ct_agendamento');

const router = express.Router();

router.post('/horario', selecionarHorarios);
router.post('/novo', criarAgendamento);

module.exports = router;