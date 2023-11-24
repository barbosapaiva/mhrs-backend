'use strict';
const express = require('express');

const reuniaoControll = require('../controllers/reuniaoController');
const router = express.Router();

router.get('/reunioes', reuniaoControll.getAllReunioes);
router.get('/reuniao/:id', reuniaoControll.getReuniao);
router.get('/reuniaonegocio/:id', reuniaoControll.getReuniaoNegocio);
router.post('/reuniao', reuniaoControll.addReuniao);
router.put('/reuniao/:id', reuniaoControll.updateReuniao);
router.put('/reuniaoEstado1/:id', reuniaoControll.updateEstado1);
router.put('/reuniaoEstado0/:id', reuniaoControll.updateEstado0);
router.patch('/reuniao/:id', reuniaoControll.updateReuniao);
router.delete('/reuniao/:id', reuniaoControll.deleteReuniao);

module.exports = {
    routes: router
}

