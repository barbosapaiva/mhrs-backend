'use strict';

const entrevistaData = require('../data/entrevistas');


const getAllEntrevistas = async (req, res, next) => {
    try {
        const entrevistalist = await entrevistaData.getEntrevistas();
        res.send(entrevistalist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEntrevista = async (req, res, next) => {
    try {
        const entrevistaId = req.params.id;
        const entrevista = await entrevistaData.getById(entrevistaId);
        res.send(entrevista);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addEntrevista = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await entrevistaData.createEntrevista(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEntrevista = async (req, res, next) => {
    try {
        const entrevistaId =  req.params.id;
        const data = req.body;
        const updated = await entrevistaData.updateEntrevista(entrevistaId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEntrevista = async (req, res, next) => {
    try {
        const entrevistaId = req.params.id;
        const deletedentrevista = await entrevistaData.deleteEntrevista(entrevistaId);
        res.send(deletedentrevista);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEntrevistaPerfil = async (req, res, next) => {
    try {
        const perfilId = req.params.id;
        const entrevista = await entrevistaData.getByPerfil(perfilId);
        res.send(entrevista);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEntrevistaCandidatura = async (req, res, next) => {
    try {
        const candidaturaId = req.params.id;
        const entrevista = await entrevistaData.getByCandidatura(candidaturaId);
        res.send(entrevista);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllEntrevistas,
    getEntrevista,
    addEntrevista,
    updateEntrevista,
    deleteEntrevista,
    getEntrevistaPerfil,
    getEntrevistaCandidatura
}