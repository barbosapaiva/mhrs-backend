'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTipocandidaturas = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tipocandidaturas');
        const tipocandidaturaslist = await pool.request().query(sqlQueries.tipocandidaturaslist);
        return tipocandidaturaslist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getTipocandidaturas
}