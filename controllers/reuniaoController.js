'use strict';

const reuniaoData = require('../data/reunioes');


const getAllReunioes = async (req, res, next) => {
    try {
        const reuniaolist = await reuniaoData.getReunioes();
        res.send(reuniaolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getReuniao = async (req, res, next) => {
    try {
        const reuniaoId = req.params.id;
        const reuniao = await reuniaoData.getById(reuniaoId);
        res.send(reuniao);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addReuniao = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await reuniaoData.createReuniao(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateReuniao = async (req, res, next) => {
    try {
        const reuniaoId =  req.params.id;
        const data = req.body;
        const updated = await reuniaoData.updateReuniao(reuniaoId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEstado1 = async (req, res, next) => {
    try {
        const reuniaoId =  req.params.id;
        const updated = await reuniaoData.updateEstado1(reuniaoId);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEstado0 = async (req, res, next) => {
    try {
        const reuniaoId =  req.params.id;
        const updated = await reuniaoData.updateEstado0(reuniaoId);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteReuniao = async (req, res, next) => {
    try {
        const reuniaoId = req.params.id;
        const deletedreuniao = await reuniaoData.deleteReuniao(reuniaoId);
        res.send(deletedreuniao);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getReuniaoNegocio = async (req, res, next) => {
    try {
        const negocioId = req.params.id;
        const negocio = await reuniaoData.getByNegocio(negocioId);
        res.send(negocio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getAllReunioes,
    getReuniao,
    addReuniao,
    updateReuniao,
    deleteReuniao,
    updateEstado1,
    updateEstado0,
    getReuniaoNegocio
}