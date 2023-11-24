'use strict';

const tipointeracaoData = require('../data/tipointeracao');

const getAllTipos = async (req, res, next) => {
    try {
        const tipointeracolist = await tipointeracaoData.getTipoInteracao();
        res.send(tipointeracolist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllTipos
}