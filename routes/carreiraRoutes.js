'use strict';

const express = require('express');
const carreiraControll = require('../controllers/carreiraController');
const router = express.Router();

router.get('/carreiras', carreiraControll.getAllCarreiras);
router.post('/carreira', carreiraControll.addCarreira);
router.delete('/carreira/:id', carreiraControll.deleteCarreira);



module.exports = {
    routes: router
}