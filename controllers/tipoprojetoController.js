'use strict';

const tipoprojetoData = require('../data/tipoprojetos');

const getAllTipoprojetos = async (req, res, next) => {
    try {
        const tipoprojetolist = await tipoprojetoData.getTipoprojetos();
        res.send(tipoprojetolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addTipoProjeto = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await tipoprojetoData.createTipoProjeto(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTipoProjeto = async (req, res, next) => {
    try {
        const tipoprojetoId = req.params.id;
        const deletetipoprojeto = await tipoprojetoData.deleteTipoProjeto(tipoprojetoId);
        res.send(deletetipoprojeto);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllTipoprojetos,
    addTipoProjeto,
    deleteTipoProjeto
}