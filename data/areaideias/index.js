'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAreaIdeia = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('areaideias');
        const areaideiasList = await pool.request().query(sqlQueries.areaideiaslist);
        return areaideiasList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getAreaIdeia
}