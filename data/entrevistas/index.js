'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEntrevistas = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const entrevistasList = await pool.request().query(sqlQueries.entrevistaslist);
        return entrevistasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (entrevistaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const entrevista = await pool.request()
            .input('entrevistaId', sql.Int, entrevistaId)
            .query(sqlQueries.entrevistabyId);
        return entrevista.recordset;
    } catch (error) {
        return error.message;
    }
}

const createEntrevista = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const insertEntrevista = await pool.request()
            .input('Assunto', sql.NVarChar(150), data.Assunto)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('TipoLocal', sql.NVarChar(25), data.TipoLocal)
            .input('LocalEntrevista', sql.NVarChar(250), data.LocalEntrevista)
            .input('DataEntrev', sql.Date, data.DataEntrev)
            .input('HoraEntrev', sql.Time, data.HoraEntrev)
            .input('Notas', sql.NVarChar(sql.MAX), data.Notas)
            .input('DocumentoPath', sql.NVarChar(sql.MAX), data.DocumentoPath)
            .input('IDEntrevistador', sql.Int, data.IDEntrevistador)
            .input('IDCandidatura', sql.Int, data.IDCandidatura)
            .query(sqlQueries.createEntrevista);
        return insertEntrevista.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEntrevista = async (entrevistaId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const update = await pool.request()
            .input('entrevistaId', sql.Int, entrevistaId)
            .input('Assunto', sql.NVarChar(150), data.Assunto)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('TipoLocal', sql.NVarChar(25), data.TipoLocal)
            .input('LocalEntrevista', sql.NVarChar(250), data.LocalEntrevista)
            .input('DataEntrev', sql.Date, data.DataEntrev)
            .input('HoraEntrev', sql.Time, data.HoraEntrev)
            .input('Notas', sql.NVarChar(sql.MAX), data.Notas)
            .input('DocumentoPath', sql.NVarChar(sql.MAX), data.DocumentoPath)
            .input('IDEntrevistador', sql.Int, data.IDEntrevistador)
            .input('IDPontuacao', sql.Int, data.IDPontuacao)
            .input('IDCandidatura', sql.Int, data.IDCandidatura)
            .query(sqlQueries.updateEntrevista);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEntrevista = async (entrevistaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const deleteEntrevista = await pool.request()
            .input('entrevistaId', sql.Int, entrevistaId)
            .query(sqlQueries.deleteEntrevista);
        return deleteEntrevista.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByPerfil = async (perfilId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const entrevista = await pool.request()
            .input('perfilId', sql.Int, perfilId)
            .query(sqlQueries.entrevistabyPerfil);
        return entrevista.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByCandidatura = async (candidaturaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('entrevistas');
        const entrevista = await pool.request()
            .input('candidaturaId', sql.Int, candidaturaId)
            .query(sqlQueries.entrevistabyCand);
        return entrevista.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getEntrevistas,
    getById,
    createEntrevista,
    updateEntrevista,
    deleteEntrevista,
    getByPerfil,
    getByCandidatura
}

