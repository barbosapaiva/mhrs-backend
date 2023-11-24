'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getProjetos = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('projetos');
        const projetosList = await pool.request().query(sqlQueries.projetoslist);
        return projetosList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (projetoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('projetos');
        const projeto = await pool.request()
            .input('projetoId', sql.Int, projetoId)
            .query(sqlQueries.projetobyId);
        return projeto.recordset;
    } catch (error) {
        return error.message;
    }
}

const createProjeto = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('projetos');
        const insertProjeto = await pool.request()
            .input('NomeProjeto', sql.NVarChar(100), data.NomeProjeto)
            .input('AreaProjeto', sql.Int, data.AreaProjeto)
            .input('TipoProjeto', sql.Int, data.TipoProjeto)
            .input('IDCliente', sql.Int, data.IDCliente)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .query(sqlQueries.createProjeto);
        return insertProjeto.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateProjeto = async (projetoId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('projetos');
        const update = await pool.request()
            .input('projetoId', sql.Int, projetoId)
            .input('NomeProjeto', sql.NVarChar(100), data.NomeProjeto)
            .input('AreaProjeto', sql.NVarChar(100), data.AreaProjeto)
            .input('TipoProjeto', sql.NVarChar(100), data.TipoProjeto)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .query(sqlQueries.updateProjeto);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteProjeto = async (projetoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('projetos');
        const deleteProjeto = await pool.request()
            .input('projetoId', sql.Int, projetoId)
            .query(sqlQueries.deleteProjeto);
        return deleteProjeto.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getProjetos,
    getById,
    createProjeto,
    updateProjeto,
    deleteProjeto
}