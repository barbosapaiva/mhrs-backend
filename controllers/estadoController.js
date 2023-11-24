'use strict';

const estadoData = require('../data/estados');

const getAllEstados = async (req, res, next) => {
    try {
        const estadolist = await estadoData.getEstados();
        res.send(estadolist);     
          
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllEstados
}