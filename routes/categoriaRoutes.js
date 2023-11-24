'use strict';

const express = require('express');
const categoriaControll = require('../controllers/categoriaController');
const router = express.Router();

router.get('/categorias', categoriaControll.getAllCategorias);

module.exports = {
    routes: router
}