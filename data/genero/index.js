'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getGenero = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('genero');
        const generoList = await pool.request().query(sqlQueries.generolist);
        return generoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getGenero
}