'use strict';

const express = require('express');
const areaformacaoControll = require('../controllers/areaformacaoController');
const router = express.Router();

router.get('/areaformacao', areaformacaoControll.getAllareaformacao);

module.exports = {
    routes: router
}