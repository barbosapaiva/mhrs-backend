'use strict';

const express = require('express');
const experienciaControll = require('../controllers/experienciaController');
const router = express.Router();

router.get('/experiencias', experienciaControll.getAllExperiencias);

module.exports = {
    routes: router
}