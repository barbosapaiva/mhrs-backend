'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTipoprojetos = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tipoprojetos');
        const tipoprojetoslist = await pool.request().query(sqlQueries.tipoprojetoslist);
        return tipoprojetoslist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const createTipoProjeto = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tipoprojetos');
        const insertTipProjeto = await pool.request()
            .input('TipoProjeto', sql.NVarChar(100), data.TipoProjeto)
            .query(sqlQueries.createTipoProjeto);
        return insertTipProjeto.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteTipoProjeto = async (tipoprojetoId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tipoprojetos');
        const deleteTipoProjeto = await pool.request()
            .input('tipoprojetoId', sql.Int, tipoprojetoId)
            .query(sqlQueries.deleteTipoProjeto);
        return deleteTipoProjeto.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getTipoprojetos,
    createTipoProjeto,
    deleteTipoProjeto
}