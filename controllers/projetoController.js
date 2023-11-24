'use strict';

const projetoData = require('../data/projetos');

const getAllProjetos = async (req, res, next) => {
    try {
        const projetolist = await projetoData.getProjetos();
        res.send(projetolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProjeto = async (req, res, next) => {
    try {
        const projetoId = req.params.id;
        const projeto = await projetoData.getById(projetoId);
        res.send(projeto);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addProjeto = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await projetoData.createProjeto(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProjeto = async (req, res, next) => {
    try {
        const projetoId =  req.params.id;
        const data = req.body;
        const updated = await projetoData.updateProjeto(projetoId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProjeto = async (req, res, next) => {
    try {
        const projetoId = req.params.id;
        const deletedprojeto = await projetoData.deleteProjeto(projetoId);
        res.send(deletedprojeto);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProjetos,
    getProjeto,
    addProjeto,
    updateProjeto,
    deleteProjeto
}