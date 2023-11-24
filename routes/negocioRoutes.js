'use strict';

const express = require('express');
const negocioControll = require('../controllers/negocioController');
const router = express.Router();

router.get('/negocios', negocioControll.getAllNegocios);
router.get('/negocio/:id', negocioControll.getNegocio);
router.get('/negocioProjeto', negocioControll.getNegocioProjeto);
router.post('/negocio', negocioControll.addNegocio);
router.put('/negocio/:id', negocioControll.updateNegocio);
router.patch('/negocio/:id', negocioControll.updateNegocio);
router.delete('/negocio/:id', negocioControll.deleteNegocio);
router.put('/negocioInativo/:id', negocioControll.updateNegocioInativo);
router.get('/meusNegocios/:id', negocioControll.negociobyIdperfil);

module.exports = {
    routes: router
}