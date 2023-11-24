'use strict';

const express = require('express');
const tipoperfilControll = require('../controllers/tipoperfilController');
const router = express.Router();

router.get('/tiposperfil', tipoperfilControll.getAllTiposPerfil);

module.exports = {
    routes: router
}