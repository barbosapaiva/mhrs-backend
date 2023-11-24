'use strict';

const express = require('express');
const clienteControll = require('../controllers/clienteController');
const router = express.Router();

router.get('/clientes', clienteControll.getAllClientes);
router.get('/cliente/:id', clienteControll.getCliente);
router.post('/cliente', clienteControll.addCliente);
router.put('/cliente/:id', clienteControll.updateCliente);
router.patch('/cliente/:id', clienteControll.updateCliente);
router.delete('/cliente/:id', clienteControll.deleteCliente);

module.exports = {
    routes: router
}