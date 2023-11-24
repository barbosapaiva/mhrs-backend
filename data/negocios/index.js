'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getNegocios = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const negociosList = await pool.request().query(sqlQueries.negocioslist);
        return negociosList.recordset;
    } catch (error) {
        return error.message;
    }
}

const getNegocioPorProjeto = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const negociosListProjeto = await pool.request().query(sqlQueries.negocioslistprojeto);
        return negociosListProjeto.recordset;
    } catch (error) {
        return error.message;
    }
}


const getById = async (negocioId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const negocio = await pool.request()
            .input('negocioId', sql.Int, negocioId)
            .query(sqlQueries.negociobyId);
        return negocio.recordset;
    } catch (error) {
        return error.message;
    }
}

const createNegocio = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const insertNegocio = await pool.request()
            .input('IDCliente', sql.Int, data.IDCliente)
            .input('IDPerfil',  sql.Int, data.IDPerfil)
            .input('IDEstado', sql.Int, data.IDEstado)
            .input('DataSubmissao', sql.Date, data.DataSubmissao)
            .input('IDProjeto', sql.Int, data.IDProjeto)
            .query(sqlQueries.createNegocio);
        return insertNegocio.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateNegocio = async (negocioId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const update = await pool.request()
            .input('negocioId', sql.Int, negocioId)
            .input('IDEstado', sql.NVarChar(100), data.IDEstado)
            .query(sqlQueries.updateNegocio);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateNegocioInativo = async (negocioId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const update = await pool.request()
            .input('negocioId', sql.Int, negocioId)
            .input('IDEstado', sql.NVarChar(100), data.IDEstado)
            .query(sqlQueries.updateNegocioInativo);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteNegocio = async (negocioId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const deleteNegocio = await pool.request()
            .input('negocioId', sql.Int, negocioId)
            .query(sqlQueries.deleteNegocio);
        return deleteNegocio.recordset;
    } catch (error) {
        return error.message;
    }
}

const getNegocioPorPerfil = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('negocios');
        const cleanSqlQuery = sqlQueries.negociosbyUser.replace(/^\uFEFF/, '');
        const negocio = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(cleanSqlQuery);
        return negocio.recordset;
    } catch (error) {
        console.error("error fetching data:", error.message);
        return [];
    }
}

module.exports = {
    getNegocios,
    getById,
    createNegocio,
    updateNegocio,
    deleteNegocio,
    updateNegocioInativo,
    getNegocioPorPerfil,
    getNegocioPorProjeto
}