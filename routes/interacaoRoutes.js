'use strict';

const express = require('express');
const interacaoControll = require('../controllers/interacaoController');
const router = express.Router();

router.get('/interacoes', interacaoControll.getAllInteracoes);
router.get('/interacao/:id', interacaoControll.getInteracaobyId);
router.get('/interacaoNegocio/:id', interacaoControll.getInteracaobyNegocio);
router.post('/interacao', interacaoControll.createinteracao);
router.put('/interacao/:id', interacaoControll.updateinteracao);
router.delete('/interacao/:id', interacaoControll.deleteinteracao);
router.get('/interacaoNegocio/:idperfil/:idnegocio', interacaoControll.interacaobyIdperfil);

module.exports = {
    routes: router
}