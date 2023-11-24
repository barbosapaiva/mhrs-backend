'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTipoInteracao = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tipointeracao');
        const tipointeracaolist = await pool.request().query(sqlQueries.listTipoInteracao);
        return tipointeracaolist.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getTipoInteracao
}