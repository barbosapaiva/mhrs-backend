'use strict';

const interacaoData = require('../data/interacoes');

const getAllInteracoes = async (req, res, next) => {
    try {
        const interacaolist = await interacaoData.getInteracao();
        res.send(interacaolist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getInteracaobyId = async (req, res, next) => {
    try {
        const interacaoId = req.params.id;
        const interacaobyid = await interacaoData.getInteracaoById(interacaoId);
        res.send(interacaobyid);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createinteracao = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await interacaoData.createInteracao(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateinteracao = async (req, res, next) => {
    try {
        const interacaoId = req.params.id;
        const data = req.body;
        const updated = await interacaoData.updateInteracao(interacaoId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const deleteinteracao = async (req, res, next) => {
    try {
        const interacaoId = req.params.id;
        const deletedinteracao = await interacaoData.deleteInteracao(interacaoId);
        res.send(deletedinteracao);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const interacaobyIdperfil = async (req, res, next) => {
    try {
        const IdPerfil = req.params.idperfil;
        const IdNegocio = req.params.idnegocio;
        const interacoes = await interacaoData.interacaobyUser(IdPerfil, IdNegocio);
        res.send(interacoes);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getInteracaobyNegocio = async (req, res, next) => {
    try {
        const negocioId = req.params.id;
        const interacaobyNegocio = await interacaoData.getInteracaoByNegocio(negocioId);
        res.send(interacaobyNegocio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllInteracoes,
    getInteracaobyId,
    createinteracao,
    updateinteracao,
    interacaobyIdperfil,
    deleteinteracao,
    getInteracaobyNegocio
}