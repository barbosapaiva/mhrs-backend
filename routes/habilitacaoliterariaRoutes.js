'use strict';

const express = require('express');
const habilitacaoControll = require('../controllers/habilitacaoliterariaController');
const router = express.Router();

router.get('/habilitacaoliteraria', habilitacaoControll.getAllhabilitacao);

module.exports = {
    routes: router
}