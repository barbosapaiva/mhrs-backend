'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEstados = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estados');
        const estadosList = await pool.request().query(sqlQueries.estadoslist);
        return estadosList.recordset;
        
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getEstados
}