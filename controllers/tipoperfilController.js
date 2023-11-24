'use strict';

const tipoperfilData = require('../data/tiposperfil');

const getAllTiposPerfil = async (req, res, next) => {
    try {
        const tiposperfillist = await tipoperfilData.getTiposPerfil();
        res.send(tiposperfillist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllTiposPerfil
}