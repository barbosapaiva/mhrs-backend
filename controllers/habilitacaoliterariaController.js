'use strict';

const habilitacaoData = require('../data/habilitacaoliteraria');


const getAllhabilitacao = async (req, res, next) => {
    try {
        const habilitacaoDatalist = await habilitacaoData.getHabilitacaoLiteraria();
        res.send(habilitacaoDatalist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllhabilitacao
}