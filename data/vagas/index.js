'use strict';
const utils = require('../utils');
const pool = require('../../db');

const getVagas = async () => {
    try {
        const sqlQueries = await utils.loadSqlQueries('vagas');
        const vagasList = await pool.query(sqlQueries.vagaslist);
        return vagasList.rows; 
    } catch (error) {
        console.error(error.message);
    }
};

const getById = async (vagaId) => {
    try {
        const sqlQueries = await utils.loadSqlQueries('vagas');
        const vaga = await pool.query(sqlQueries.vagabyId, [vagaId]);
        return vaga.rows; 
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
};

const createVaga = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('vagas');
        const insertVaga = await pool.request()
            .input('IDAutor', sql.Int, data.IDAutor)
            .input('Titulo', sql.NVarChar(100), data.Titulo)
            .input('Descricao', sql.NVarChar(1500), data.Descricao)
            .input('Descricao_BeneficiosVaga', sql.NVarChar(1500), data.Descricao_BeneficiosVaga)
            .input('TipoVaga', sql.NVarChar(100), data.TipoVaga)
            .input('DataAbertura', sql.Date, data.DataAbertura)
            .input('Experiencia', sql.Int, data.Experiencia)
            .input('CarreiraAssociada', sql.Int, data.CarreiraAssociada)
            .input('NumVagas', sql.Int, data.NumVagas)
            .input('Estado', sql.NVarChar(100), data.Estado)
            .input('Localizacao', sql.Int, data.Localizacao)
            .query(sqlQueries.createVaga);
        return insertVaga.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateVaga = async (vagaId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('vagas');
        const update = await pool.request()
            .input('vagaId', sql.Int, vagaId)
            .input('Titulo', sql.NVarChar(100), data.Titulo)
            .input('Descricao', sql.NVarChar(1500), data.Descricao)
            .input('Descricao_BeneficiosVaga', sql.NVarChar(1500), data.Descricao_BeneficiosVaga)
            .input('TipoVaga', sql.NVarChar(100), data.TipoVaga)
            .input('DataAbertura', sql.Date, data.DataAbertura)
            .input('Experiencia', sql.NVarChar(100), data.Experiencia)
            .input('CarreiraAssociada', sql.NVarChar(100), data.CarreiraAssociada)
            .input('NumVagas', sql.Int, data.NumVagas)
            .input('Estado', sql.Int, data.Estado)
            .input('Localizacao', sql.NVarChar(100), data.Localizacao)
            .query(sqlQueries.updateVaga);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteVaga = async (vagaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('vagas');
        const deleteVaga = await pool.request()
            .input('vagaId', sql.Int, vagaId)
            .query(sqlQueries.deleteVaga);
        return deleteVaga.recordset;
    } catch (error) {
        return error.message;
    }
}

const candidaturaVaga = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('vagas');
        const candidaturaVaga = await pool.request()
            .input('nomeFichCV', sql.NVarChar(100), data.nomeFichCV)
            .input('cartaMotivacao', sql.NVarChar(1500), data.cartaMotivacao)
            .input('vagaId', sql.Int, data.vagaId)
            .input('idPerfil', sql.NVarChar(100), data.idPerfil)
            .input('tipoCandidatura', sql.Date, data.tipoCandidatura)
            .input('nomeCandidato', sql.Int, data.nomeCandidato)
            .input('contactoCandidato', sql.Int, data.contactoCandidato)
            .input('emailCandidato', sql.Int, data.emailCandidato)
            .query(sqlQueries.candidaturaVaga);
        return candidaturaVaga.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getVagas,
    getById,
    createVaga,
    updateVaga,
    deleteVaga,
    candidaturaVaga
}

