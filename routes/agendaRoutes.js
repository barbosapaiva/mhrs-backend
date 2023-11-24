'use strict';
const multer = require('multer');
const express = require('express');

const agendacontroll = require('../controllers/agendaController');
const router = express.Router();

router.get('/agenda/:id', agendacontroll.getReunioes);
router.delete('/agenda/delete/:id', agendacontroll.deleteReuniao);
router.post('/agenda/adicionar', agendacontroll.addReuniao);

module.exports = {
    routes: router
}

