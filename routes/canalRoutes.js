'use strict';

const express = require('express');
const canalControll = require('../controllers/canalcomunicacaoController');
const router = express.Router();

router.get('/canalcomunicacao', canalControll.getAllCanal);

module.exports = {
    routes: router
}