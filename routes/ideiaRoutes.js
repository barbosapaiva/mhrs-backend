'use strict';

const express = require('express');
const ideiaControll = require('../controllers/ideiaController');
const router = express.Router();

router.get('/ideias', ideiaControll.getAllIdeias);
router.get('/ideia/:id', ideiaControll.getIdeia);
router.post('/ideia', ideiaControll.addIdeia);
router.put('/ideia/:id', ideiaControll.updateIdeia);
router.patch('/ideia/:id', ideiaControll.updateIdeia);
router.delete('/ideia/:id', ideiaControll.deleteIdeia);
router.get('/userideia/:id', ideiaControll.ideiaUser);

module.exports = {
    routes: router
}