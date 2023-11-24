'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAvisos = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const avisoList = await pool.request().query(sqlQueries.avisolist);
        return avisoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getInformacao = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const informacaoList = await pool.request().query(sqlQueries.informacaolist);
        return informacaoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getAvisoUser = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const cleanSqlQuery = sqlQueries.avisosbyUser.replace(/^\uFEFF/, '');
        const notificacaoList = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(cleanSqlQuery);
        return notificacaoList.recordset;
    } catch (error) {
        console.error("error fetching data:", error.message);
        return [];
    }
}

const getAvisoUserbell = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const cleanSqlQuery = sqlQueries.avisosbyUserbell.replace(/^\uFEFF/, '');
        const notificacaoList = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(cleanSqlQuery);
        return notificacaoList.recordset;
    } catch (error) {
        console.error("error fetching data:", error.message);
        return [];
    }
}

const createInformacao = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const insertInfo = await pool.request()
            .input('Titulo', sql.NVarChar(30), data.Titulo)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('Data_Criacao', sql.Date, data.Data_Criacao)
            .input('Estado', sql.Int, data.Estado)
            .input('IDPerfil', sql.Int, data.IDPerfil)
            .query(sqlQueries.createInformacao);
        return insertInfo.recordset;
    } catch (error) {
        return error.message;
    }
}

const createAviso = async (reuniaoId, perfilId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const insertaviso = await pool.request()
            .input('reuniaoId', sql.Int, reuniaoId)
            .input('IDPerfil', sql.Int, perfilId)
            .query(sqlQueries.createAviso);
        return insertaviso.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateNotificacaoInativa = async (notificacaoId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const update = await pool.request()
            .input('notificacaoId', sql.Int, notificacaoId)
            .input('Estado', sql.NVarChar(100), data.Estado)
            .query(sqlQueries.updateNotificacaoInativa);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateInformacaoEstado = async (informacaoId, estado) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const update = await pool.request()
            .input('informacaoId', sql.Int, informacaoId)
            .input('estado', sql.Int, estado)
            .query(sqlQueries.updateInformacaoEstado);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateALido = async (avisoId, lido) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const update = await pool.request()
            .input('avisoId', sql.Int, avisoId)
            .input('lido', sql.Int, lido)
            .query(sqlQueries.updateALido);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const avisoLido = async (idPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, idPerfil)   
            .input('IDAviso', sql.Int, data.IDAviso)
            .query(sqlQueries.updateAvisoLido);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}



const avisosCount = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('notificacao');
        const avisos = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(sqlQueries.avisosCount);

        return avisos.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getInformacao,
    getAvisos,
    getAvisoUser,
    createInformacao,
    createAviso,
    updateNotificacaoInativa,
    avisosCount,
    avisoLido,
    getAvisoUserbell,
    updateInformacaoEstado,
    updateALido
}