'use strict';

const express = require('express');
const localizacaoControll = require('../controllers/localizacaoController');
const router = express.Router();

router.get('/localizacoes', localizacaoControll.getAllLocalizacoes);

module.exports = {
    routes: router
}