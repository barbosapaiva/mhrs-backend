'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAreaFormacao = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('areaformacao');
        const areaformacaoList = await pool.request().query(sqlQueries.areaformacaolist);
        return areaformacaoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getAreaFormacao
}