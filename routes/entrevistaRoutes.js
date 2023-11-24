'use strict';
const express = require('express');

const entrevistaControll = require('../controllers/entrevistaController');
const router = express.Router();

router.get('/entrevistas', entrevistaControll.getAllEntrevistas);
router.get('/entrevista/:id', entrevistaControll.getEntrevista);
router.get('/entrevistaPerfil/:id', entrevistaControll.getEntrevistaPerfil);
router.get('/entrevistaCandidatura/:id', entrevistaControll.getEntrevistaCandidatura);
router.post('/entrevista', entrevistaControll.addEntrevista);
router.put('/entrevista/:id', entrevistaControll.updateEntrevista);
router.patch('/entrevista/:id', entrevistaControll.updateEntrevista);
router.delete('/entrevista/:id', entrevistaControll.deleteEntrevista);

module.exports = {
    routes: router
}

