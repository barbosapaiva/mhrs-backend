'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getInteracao = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const interacaoList = await pool.request().query(sqlQueries.listInteracao);
        return interacaoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getInteracaoById = async (interacaoid) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const interacaoById = await pool.request()
            .input('interacaoid', sql.Int, interacaoid)
            .query(sqlQueries.interacaobyId);
        return interacaoById.recordset;
    } catch (error) {
        return error.message;
    }
}

const createInteracao = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const insertInteracao = await pool.request()
            .input('IDCliente', sql.Int, data.IDCliente)
            .input('IDPerfil', sql.Int, data.IDPerfil)
            .input('IDNegocio', sql.Int, data.IDNegocio)
            .input('Data_Interacao', sql.Date, data.Data_Interacao)
            .input('Descricao', sql.NVarChar(1500), data.Descricao)
            .input('Tipo_Interacao', sql.Int, data.Tipo_Interacao)
            .input('Anexo', sql.NVarChar(250), data.Anexo)
            .input('Canal', sql.Int, data.Canal)
            .input('Titulo', sql.NVarChar(200), data.Titulo)
            .query(sqlQueries.createInteracao);
        return insertInteracao.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateInteracao = async (idinteracao, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const update = await pool.request()
            .input('idinteracao', sql.Int, idinteracao)
            .input('Data_Interacao', sql.Date, data.Data_Interacao)
            .input('Descricao', sql.NVarChar(1500), data.Descricao)
            .input('Tipo_Interacao', sql.Int, data.Tipo_Interacao)
            .input('Anexo', sql.NVarChar(250), data.Anexo)
            .input('Canal', sql.Int, data.Canal)
            .input('Titulo', sql.NVarChar(200), data.Titulo)
            .query(sqlQueries.updateInteracao);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const interacaobyUser = async (IDPerfil, IDNegocio) => {
    try {

        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const interacaoUser = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('IDNegocio', sql.Int, IDNegocio)
            .query(sqlQueries.interacaobyPerfil);
        return interacaoUser.recordset;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; // Return an empty array in case of an error to indicate no data found
    }
}

const deleteInteracao = async(IDInteracao) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const deleteInteracao = await pool.request()
            .input('IDInteracao', sql.Int, IDInteracao)
            .query(sqlQueries.deleteInteracao);
        return deleteInteracao.recordset;
    } catch (error) {
        return error.message;
    }
}

const getInteracaoByNegocio = async (negocioId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('interacoes');
        const interacaoByNegocio = await pool.request()
            .input('negocioId', sql.Int, negocioId)
            .query(sqlQueries.interacaobyNegocio);
        return interacaoByNegocio.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getInteracao,
    getInteracaoById,
    createInteracao,
    updateInteracao,
    interacaobyUser,
    deleteInteracao,
    getInteracaoByNegocio
}