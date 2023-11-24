'use strict';

const participanteData = require('../data/participantes');


const getAllParticipantes = async (req, res, next) => {
    try {
        const participantelist = await participanteData.getParticipantes();
        res.send(participantelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getParticipante = async (req, res, next) => {
    try {
        const perfilId = req.params.perfilid;
        const reuniaoId = req.params.reuniaoid;
        const participante = await participanteData.getById(perfilId, reuniaoId);
        res.send(participante);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addParticipante = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await participanteData.createParticipante(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteParticipante = async (req, res, next) => {
    try {
        const perfilId = req.params.perfilid;
        const reuniaoId = req.params.reuniaoid;
        const deletedparticipante = await participanteData.deleteParticipante(perfilId, reuniaoId);
        res.send(deletedparticipante);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getParticipanteReuniao = async (req, res, next) => {
    try {
        const reuniaoId = req.params.reuniaoid;
        const participante = await participanteData.getByIdreuniao(reuniaoId);
        res.send(participante);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = {
    getAllParticipantes,
    getParticipante,
    addParticipante,
    deleteParticipante,
    getParticipanteReuniao
}