'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getExperiencias = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('experiencias');
        const experienciasList = await pool.request().query(sqlQueries.experienciaslist);
        return experienciasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getExperiencias
}