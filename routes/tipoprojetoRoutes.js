'use strict';

const express = require('express');
const tipoprojetoControll = require('../controllers/tipoprojetoController');
const router = express.Router();

router.get('/tipoprojetos', tipoprojetoControll.getAllTipoprojetos);
router.post('/tipoprojeto', tipoprojetoControll.addTipoProjeto);
router.delete('/tipoprojeto/:id', tipoprojetoControll.deleteTipoProjeto);

module.exports = {
    routes: router
}