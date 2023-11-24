'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCarreiras = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('carreiras');
        const carreirasList = await pool.request().query(sqlQueries.carreiraslist);
        return carreirasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const createCarreira = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('carreiras');
        const insertCarreira = await pool.request()
            .input('Tipo', sql.NVarChar(50), data.Tipo)
            .query(sqlQueries.createCarreira);
        return insertCarreira.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteCarreira = async (carreiraId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('carreiras');
        const deleteCarreira = await pool.request()
            .input('carreiraId', sql.Int, carreiraId)
            .query(sqlQueries.deleteCarreira);
        return deleteCarreira.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getCarreiras,
    createCarreira,
    deleteCarreira
}