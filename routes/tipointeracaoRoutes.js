'use strict';

const express = require('express');
const tipointeracaoControll = require('../controllers/tipointeracaoController');
const router = express.Router();

router.get('/tipointeracao', tipointeracaoControll.getAllTipos);

module.exports = {
    routes: router
}