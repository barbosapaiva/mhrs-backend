'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCategorias = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorias');
        const categoriaList = await pool.request().query(sqlQueries.categoriaslist);
        return categoriaList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getCategorias
}