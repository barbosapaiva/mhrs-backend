'use strict';
const express = require('express');

const participanteControll = require('../controllers/participanteController');
const router = express.Router();

router.get('/participantes', participanteControll.getAllParticipantes);
router.get('/participante/:perfilid/:reuniaoid', participanteControll.getParticipante);
router.get('/participanteR/:reuniaoid', participanteControll.getParticipanteReuniao);
router.post('/participante', participanteControll.addParticipante);
router.delete('/participante/:perfilid/:reuniaoid', participanteControll.deleteParticipante);


module.exports = {
    routes: router
}

