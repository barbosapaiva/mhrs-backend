'use strict';

const express = require('express');
const generoControll = require('../controllers/generoController');
const router = express.Router();

router.get('/genero', generoControll.getAllgenero);

module.exports = {
    routes: router
}