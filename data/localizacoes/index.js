'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getLocalizacoes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('localizacoes');
        const localizacaoList = await pool.request().query(sqlQueries.localizacoeslist);
        return localizacaoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getLocalizacoes
}