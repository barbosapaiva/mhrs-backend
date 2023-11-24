'use strict';

const ideiaData = require('../data/ideias');

const getAllIdeias = async (req, res, next) => {
    try {
        const ideialist = await ideiaData.getIdeias();
        res.send(ideialist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getIdeia = async (req, res, next) => {
    try {
        const ideiaId = req.params.id;
        const ideia = await ideiaData.getById(ideiaId);
        res.send(ideia);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addIdeia = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await ideiaData.createIdeia(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateIdeia = async (req, res, next) => {
    try {
        const ideiaId =  req.params.id;
        const data = req.body;
        const updated = await ideiaData.updateIdeia(ideiaId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteIdeia = async (req, res, next) => {
    try {
        const ideiaId = req.params.id;
        const deletedideia = await ideiaData.deleteIdeia(ideiaId);
        res.send(deletedideia);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const ideiaUser = async (req, res, next) => {
    try {
        const IDPerfil = req.params.id;
        const ideiauser = await ideiaData.ideiasbyUser(IDPerfil);
        res.send(ideiauser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllIdeias,
    getIdeia,
    addIdeia,
    updateIdeia,
    deleteIdeia,
    ideiaUser
}