const express = require('express');
const {
    selecionarHorarios
} = require('../controllers/ct_agendamento');

const router = express.Router();

router.post('/horario', selecionarHorarios);

module.exports = router;