'use strict';

const categoriaData = require('../data/categorias');


const getAllCategorias = async (req, res, next) => {
    try {
        const categorialist = await categoriaData.getCategorias();
        res.send(categorialist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllCategorias
}