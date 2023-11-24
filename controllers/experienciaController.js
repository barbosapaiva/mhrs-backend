'use strict';

const experienciaData = require('../data/experiencias');


const getAllExperiencias = async (req, res, next) => {
    try {
        const experiencialist = await experienciaData.getExperiencias();
        res.send(experiencialist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllExperiencias
}