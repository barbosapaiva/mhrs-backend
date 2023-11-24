'use strict';

const tipocandidaturaData = require('../data/tipocandidaturas');

const getAllTipocandidaturas = async (req, res, next) => {
    try {
        const tipocandidaturalist = await tipocandidaturaData.getTipocandidaturas();
        res.send(tipocandidaturalist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllTipocandidaturas
}