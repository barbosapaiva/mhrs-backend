'use strict';

const candidaturaData = require('../data/candidaturas');


const getAllCandidaturas = async (req, res, next) => {
    try {
        const candidaturalist = await candidaturaData.getCandidaturas();
        res.send(candidaturalist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCandidatura = async (req, res, next) => {
    try {
        const candidaturaId = req.params.id;
        const candidatura = await candidaturaData.getById(candidaturaId);
        res.send(candidatura);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCandidatura = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await candidaturaData.createCandidatura(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCandidatura = async (req, res, next) => {
    try {
        const candidaturaId = req.params.id;
        const data = req.body;
        const updated = await candidaturaData.updateCandidatura(candidaturaId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCandidatura = async (req, res, next) => {
    try {
        const candidaturaId = req.params.id;
        const deletecandidatura = await candidaturaData.deleteCandidatura(candidaturaId);
        res.send(deletecandidatura);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCandidaturaPorUtilizador = async (req, res, next) => {
    try {
        const IdPerfil = req.params.id;
        const candidaturas = await candidaturaData.getCandituraPorPerfil(IdPerfil);
        res.send(candidaturas);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const candidaturaValidation = async (req, res, next) => {
    try {
        const vagaId = req.params.vagaid;
        const perfilId = req.params.perfilid;
        const candidatura = await candidaturaData.candidaturaValidation(vagaId, perfilId);
        res.send(candidatura);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllCandidaturas,
    getCandidatura,
    addCandidatura,
    updateCandidatura,
    deleteCandidatura,
    getCandidaturaPorUtilizador,
    candidaturaValidation
}