'use strict';

const express = require('express');
const areaideiaControll = require('../controllers/areaideiaController');
const router = express.Router();

router.get('/areaideia', areaideiaControll.getAllareaideias);

module.exports = {
    routes: router
}