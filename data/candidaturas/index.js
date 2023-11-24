'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCandidaturas = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const candidaturasList = await pool.request().query(sqlQueries.candidaturaslist);
        return candidaturasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (candidaturaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const candidatura = await pool.request()
            .input('candidaturaId', sql.Int, candidaturaId)
            .query(sqlQueries.candidaturabyId);
        return candidatura.recordset;
    } catch (error) {
        return error.message;
    }
}

const candidaturaValidation = async (vagaId,perfilId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const candidatura = await pool.request()
            .input('vagaId', sql.Int, vagaId)
            .input('perfilId', sql.Int, perfilId)
            .query(sqlQueries.candidaturavalidation);
        return candidatura.recordset;
    } catch (error) {
        return error.message;
    }
}

const createCandidatura = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const insertCandidatura = await pool.request()
            .input('CV', sql.Bit, data.CV)
            .input('NomeFichCV', sql.NVarChar(sql.MAX), data.NomeFichCV)
            .input('CartaMotivacao', sql.NVarChar(1500), data.CartaMotivacao)
            .input('IDVaga', sql.Int, data.IDVaga)
            .input('IDPerfil', sql.Int, data.IDPerfil)
            .input('DataCandidatura', sql.Date, data.DataCandidatura)
            .input('TipoCandidatura', sql.TinyInt, data.TipoCandidatura)
            .input('NomeCandidato', sql.NVarChar(100), data.NomeCandidato)
            .input('ContactoCandidato', sql.NVarChar(100), data.ContactoCandidato)
            .input('EmailCandidato', sql.NVarChar(100), data.EmailCandidato)
            .query(sqlQueries.createCandidatura);
        return insertCandidatura.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateCandidatura = async (candidaturaId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const updateCandidatura = await pool.request()
            .input('candidaturaId', sql.Int, candidaturaId)
            .input('Estado', sql.NVarChar(100), data.Estado)
            .query(sqlQueries.updateCandidatura);
        return updateCandidatura.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteCandidatura = async (candidaturaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const deleteCandidatura = await pool.request()
            .input('candidaturaId', sql.Int, candidaturaId)
            .query(sqlQueries.deleteCandidatura);
        return deleteCandidatura.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCandituraPorPerfil = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('candidaturas');
        const candidatura = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(sqlQueries.candidaturasbyIdPerfil);
        return candidatura.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getCandidaturas,
    getById,
    createCandidatura,
    updateCandidatura,
    deleteCandidatura,
    getCandituraPorPerfil,
    candidaturaValidation
}