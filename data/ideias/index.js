'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getIdeias = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ideias');
        const ideiasList = await pool.request().query(sqlQueries.ideiaslist);
        return ideiasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (ideiaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ideias');
        const ideia = await pool.request()
            .input('ideiaId', sql.Int, ideiaId)
            .query(sqlQueries.ideiabyId);
        return ideia.recordset;
    } catch (error) {
        return error.message;
    }
}

const createIdeia = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ideias');
        const insertIdeia = await pool.request()
            .input('Titulo', sql.NVarChar(100), data.Titulo)
            .input('AreaIdeia', sql.Int, data.AreaIdeia)
            .input('Descricao', sql.NVarChar(1500), data.Descricao)
            .input('DataSubmetida', sql.Date, data.DataSubmetida)
            .input('LocalEmpresa', sql.Int, data.LocalEmpresa)
            .input('IDPerfil', sql.Int, data.IDPerfil)
            .input('IDEstado', sql.Int, data.IDEstado)
            .query(sqlQueries.createIdeia);
        return insertIdeia.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateIdeia = async (ideiaId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ideias');
        const update = await pool.request()
            .input('ideiaId', sql.Int, ideiaId)
            .input('IDEstado', sql.NVarChar(100), data.IDEstado)
            .query(sqlQueries.updateIdeia);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteIdeia = async (ideiaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ideias');
        const deleteIdeia = await pool.request()
            .input('ideiaId', sql.Int, ideiaId)
            .query(sqlQueries.deleteIdeia);
        return deleteIdeia.recordset;
    } catch (error) {
        return error.message;
    }
}

const ideiasbyUser = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ideias');
        const ideiaUser = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(sqlQueries.ideiasbyUser);
        return ideiaUser.recordset;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; 
    }
}

module.exports = {
    getIdeias,
    getById,
    createIdeia,
    updateIdeia,
    deleteIdeia,
    ideiasbyUser
}