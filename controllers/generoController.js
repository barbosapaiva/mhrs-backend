'use strict';

const generoData = require('../data/genero');


const getAllgenero = async (req, res, next) => {
    try {
        const generoDatalist = await generoData.getGenero();
        res.send(generoDatalist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllgenero
}