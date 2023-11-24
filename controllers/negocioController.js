'use strict';

const negocioData = require('../data/negocios');

const getAllNegocios = async (req, res, next) => {
    try {
        const negociolist = await negocioData.getNegocios();
        res.send(negociolist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getNegocio = async (req, res, next) => {
    try {
        const negocioId = req.params.id;
        const negocio = await negocioData.getById(negocioId);
        res.send(negocio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getNegocioProjeto = async (req, res, next) => {
    try {
        const negociolist = await negocioData.getNegocioPorProjeto();
        res.send(negociolist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addNegocio = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await negocioData.createNegocio(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateNegocio = async (req, res, next) => {
    try {
        const negocioId = req.params.id;
        const data = req.body;
        const updated = await negocioData.updateNegocio(negocioId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateNegocioInativo = async (req, res, next) => {
    try {
        const negocioId = req.params.id;
        const data = req.body;
        const updated = await negocioData.updateNegocioInativo(negocioId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteNegocio = async (req, res, next) => {
    try {
        const negocioId = req.params.id;
        const deletednegocio = await negocioData.deleteNegocio(negocioId);
        res.send(deletednegocio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const negociobyIdperfil = async (req, res, next) => {
    try {
        const IdPerfil = req.params.id;
        const negocios = await negocioData.getNegocioPorPerfil(IdPerfil);
        res.send(negocios);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllNegocios,
    getNegocio,
    addNegocio,
    updateNegocio,
    deleteNegocio,
    updateNegocioInativo,
    negociobyIdperfil,
    getNegocioProjeto
}