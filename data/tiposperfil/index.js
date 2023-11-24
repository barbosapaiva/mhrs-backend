'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTiposPerfil = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('tiposperfil');
        const tiposperfilList = await pool.request().query(sqlQueries.tiposperfillist);
        return tiposperfilList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getTiposPerfil
}