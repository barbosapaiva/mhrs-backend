'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getParticipantes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('participantes');
        const participantesList = await pool.request().query(sqlQueries.participanteslist);
        return participantesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (perfilId, ReuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('participantes');
        const participante = await pool.request()
            .input('perfilId', sql.Int, perfilId)
            .input('ReuniaoId', sql.Int, ReuniaoId)
            .query(sqlQueries.participantebyId);
        return participante.recordset;
    } catch (error) {
        return error.message;
    }
}

const createParticipante = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('participantes');
        const insertParticipante = await pool.request()
            .input('IDPerfil', sql.Int, data.IDPerfil)
            .input('IDReuniao', sql.Int, data.IDReuniao)
            .query(sqlQueries.createParticipante);
        return insertParticipante.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const deleteParticipante = async (perfilId, reuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('participantes');
        const deleteParticipante = await pool.request()
            .input('perfilId', sql.Int, perfilId)
            .input('reuniaoId', sql.Int, reuniaoId)
            .query(sqlQueries.deleteParticipante);
        return deleteParticipante.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdreuniao = async (ReuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('participantes');
        const participante = await pool.request()
            .input('ReuniaoId', sql.Int, ReuniaoId)
            .query(sqlQueries.participantebyIdreuniao);
        return participante.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getParticipantes,
    getById,
    createParticipante,
    deleteParticipante,
    getByIdreuniao
}

