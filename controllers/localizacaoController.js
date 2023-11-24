'use strict';

const localizacaoData = require('../data/localizacoes');


const getAllLocalizacoes = async (req, res, next) => {
    try {
        const localizacaolist = await localizacaoData.getLocalizacoes();
        res.send(localizacaolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllLocalizacoes
}