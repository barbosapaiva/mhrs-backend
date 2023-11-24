'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getReunioesByID = async (perfilId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('agenda');
        const reunioes = await pool.request()
            .input('idPerfil', sql.Int, perfilId)
            .query(sqlQueries.reunioesByID);
        return reunioes.recordset;
    } catch (error) {
        return error.message;
    }
}

const createReuniao = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('agenda');
        const insertReuniao = await pool.request()
            .input('Assunto', sql.NVarChar(sql.MAX), data.Assunto)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('DataReuniao', sql.Date,data.DataReuniao)
            .input('HoraReuniao', sql.Date,data.HoraReuniao)
            .input('LocalReuniao', sql.NVarChar(100),data.LocalReuniao)
            .input('IDCliente', sql.Int,data.IDCliente)
            .input('IDPerfil', sql.Int,data.IDPerfil)
            .input('IDNegocio', sql.Int, data.IDNegocio)
            .input('Notas', sql.NVarChar(sql.MAX),data.Notas)
            .query(sqlQueries.createReuniao);
        return insertReuniao.recordset;
    } catch (error) {
        return error.message;
    }
}


const deleteReuniao = async (idReuniao) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('agenda');
        const deleteReuniao = await pool.request()
            .input('idReuniao', sql.Int, idReuniao)
            .query(sqlQueries.deleteCandidatura);
        return deleteReuniao.recordset;
    } catch (error) {
        return error.message;
    }
} //em vez de ser um delete deveriamos ter um campo do estado da reunião (ativa) ou (cancelada), fazer deletes na bd é uma má pratica

module.exports = {
    getReunioesByID,
    deleteReuniao,
    createReuniao
}