'use strict';

const areaformacaoData = require('../data/areaformacao');


const getAllareaformacao = async (req, res, next) => {
    try {
        const areaformacaoDatalist = await areaformacaoData.getAreaFormacao();
        res.send(areaformacaoDatalist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllareaformacao
}