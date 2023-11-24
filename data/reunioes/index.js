'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getReunioes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const reunioesList = await pool.request().query(sqlQueries.reunioeslist);
        return reunioesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (reuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const reuniao = await pool.request()
            .input('reuniaoId', sql.Int, reuniaoId)
            .query(sqlQueries.reuniaobyId);
        return reuniao.recordset;
    } catch (error) {
        return error.message;
    }
}

const createReuniao = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const insertReuniao = await pool.request()
            .input('Assunto', sql.NVarChar(150), data.Assunto)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('DataReuniao', sql.Date, data.DataReuniao)
            .input('HoraReuniao', sql.Time, data.HoraReuniao)
            .input('TipoLocal', sql.NVarChar(25), data.TipoLocal)
            .input('LocalReuniao', sql.NVarChar(200), data.LocalReuniao)
            .input('IDPerfil', sql.Int, data.IDPerfil)
            .input('IDNegocio', sql.Int, data.IDNegocio)
            .input('DocumentoPath', sql.NVarChar(sql.MAX), data.DocumentoPath)
            .input('Notas', sql.NVarChar(sql.MAX), data.Notas)
            .input('Estado', sql.Int, data.Estado)
            .query(sqlQueries.createReuniao);
        return insertReuniao.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const updateReuniao = async (reuniaoId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const update = await pool.request()
            .input('reuniaoId', sql.Int, reuniaoId)
            .input('Assunto', sql.NVarChar(150), data.Assunto)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('DataReuniao', sql.Date, data.DataReuniao)
            .input('HoraReuniao', sql.Time, data.HoraReuniao)
            .input('TipoLocal', sql.NVarChar(25), data.TipoLocal)
            .input('LocalReuniao', sql.NVarChar(200), data.LocalReuniao)
            .input('DocumentoPath', sql.NVarChar(sql.MAX), data.DocumentoPath)
            .input('Notas', sql.NVarChar(sql.MAX), data.Notas)
            .input('Estado', sql.Int, data.Estado)
            .query(sqlQueries.updateReuniao);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEstado1 = async (reuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const update = await pool.request()
            .input('reuniaoId', sql.Int, reuniaoId)
            .query(sqlQueries.updateEstado1);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEstado0 = async (reuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const update = await pool.request()
            .input('reuniaoId', sql.Int, reuniaoId)
            .query(sqlQueries.updateEstado0);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteReuniao = async (reuniaoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const deleteReuniao = await pool.request()
            .input('reuniaoId', sql.Int, reuniaoId)
            .query(sqlQueries.deleteReuniao);
        return deleteReuniao.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByNegocio = async (negocioId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('reunioes');
        const reuniao = await pool.request()
            .input('negocioId', sql.Int, negocioId)
            .query(sqlQueries.reuniaobyNegocio);
        return reuniao.recordset;
    } catch (error) {
        return error.message;
    }
}



module.exports = {
    getReunioes,
    getById,
    createReuniao,
    updateReuniao,
    deleteReuniao,
    updateEstado1,
    updateEstado0,
    getByNegocio
}

