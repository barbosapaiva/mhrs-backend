'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getHabilitacaoLiteraria = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('habilitacaoliteraria');
        const habilitacaoList = await pool.request().query(sqlQueries.habilitacaoliteraria);
        return habilitacaoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getHabilitacaoLiteraria
}