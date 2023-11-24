'use strict';

const express = require('express');
const notificacaoControll = require('../controllers/notificacaoController');
const router = express.Router();

router.get('/avisos', notificacaoControll.getAllAviso);
router.get('/informacoes', notificacaoControll.getAllInfo);
router.get('/avisos/:id', notificacaoControll.getavisoUser);
router.get('/avisosbell/:id', notificacaoControll.getavisoUserbell);
router.get('/navisos/:IDPerfil', notificacaoControll.avisosCount);
router.post('/notificacao', notificacaoControll.addNotificacao);
router.post('/aviso/:reuniaoId/:perfilId', notificacaoControll.addAviso);
router.put('/notificacaoInativa/:id', notificacaoControll.updateNotificacaoInativa);
router.put('/notificacaoEstado/:id/:estado', notificacaoControll.updateInformacaoEstado);
router.put('/avisoAlido/:id/:lido', notificacaoControll.updateALido);
router.put('/avisolido/:id',notificacaoControll.avisoLido)
router.put('/aviso/email/:email', notificacaoControll.avisoemail);

module.exports = {
    routes: router
}