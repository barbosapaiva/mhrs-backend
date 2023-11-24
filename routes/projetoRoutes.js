'use strict';

const express = require('express');
const projetoControll = require('../controllers/projetoController');
const router = express.Router();

router.get('/projetos', projetoControll.getAllProjetos);
router.get('/projeto/:id', projetoControll.getProjeto);
router.post('/projeto', projetoControll.addProjeto);
router.put('/projeto/:id', projetoControll.updateProjeto);
router.patch('/projeto/:id', projetoControll.updateProjeto);
router.delete('/projeto/:id', projetoControll.deleteProjeto);

module.exports = {
    routes: router
}