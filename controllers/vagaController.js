'use strict';

const vagaData = require('../data/vagas');


const getAllVagas = async (req, res, next) => {
    try {
        const vagalist = await vagaData.getVagas();
        res.send(vagalist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getVaga = async (req, res, next) => {
    try {
        const vagaId = req.params.id;
        const vaga = await vagaData.getById(vagaId);
        res.send(vaga);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addVaga = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await vagaData.createVaga(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateVaga = async (req, res, next) => {
    try {
        const vagaId =  req.params.id;
        const data = req.body;
        const updated = await vagaData.updateVaga(vagaId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteVaga = async (req, res, next) => {
    try {
        const vagaId = req.params.id;
        const deletedvaga = await vagaData.deleteVaga(vagaId);
        res.send(deletedvaga);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getAllVagas,
    getVaga,
    addVaga,
    updateVaga,
    deleteVaga
}