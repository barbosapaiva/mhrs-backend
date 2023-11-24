'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getcanalcomuni = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('canalcomunicacao');
        const canalist = await pool.request().query(sqlQueries.listCanal);
        return canalist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getcanalcomuni
}