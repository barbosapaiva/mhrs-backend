'use strict';

const express = require('express');
const estadoControll = require('../controllers/estadoController');
const router = express.Router();

router.get('/estados', estadoControll.getAllEstados);

module.exports = {
    routes: router
}