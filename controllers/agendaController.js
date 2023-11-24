'use strict';

const agendaData = require('../data/agenda');

const getReunioes = async (req, res, next) => {
    try {
        const idPerfil = req.params.id;
        const reunioes = await agendaData.getReunioesByID(idPerfil);
        res.send(reunioes);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addReuniao = async (req, res, next) => {
    try {
        const data = req.body;
        const insertReuniao = await agendaData.createReuniao(data);
        res.send(insertReuniao);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteReuniao = async (req, res, next) => {
    try {
        const idReuniao = req.params.id;
        const deleteReuniao = await candidaturaVaga.deletecandidatura(idReuniao);
        res.send(deleteReuniao);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getReunioes,
    deleteReuniao,
    addReuniao
}