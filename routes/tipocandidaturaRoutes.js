'use strict';

const express = require('express');
const tipocandidaturaControll = require('../controllers/tipocandidaturaController');
const router = express.Router();

router.get('/tipocandidaturas', tipocandidaturaControll.getAllTipocandidaturas);

module.exports = {
    routes: router
}