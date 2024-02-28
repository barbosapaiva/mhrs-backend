'use strict';
const utils = require('../utils');
const pool = require('../../db');

const getBeneficios = async () => {
    try {
        const sqlQueries = await utils.loadSqlQueries('beneficios');
        const beneficiosList = await pool.query(sqlQueries.beneficioslist);
        return beneficiosList.rows; 
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
};

const getById = async (beneficioId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('beneficios');
        const beneficio = await pool.request()
            .input('beneficioId', sql.Int, beneficioId)
            .query(sqlQueries.beneficiobyId);
        return beneficio.recordset;
    } catch (error) {
        return error.message;
    }
}

const createBeneficio = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('beneficios');
        const insertBeneficio = await pool.request()
            .input('Titulo', sql.NVarChar(100), data.Titulo)
            .input('Desconto', sql.TinyInt, data.Desconto)
            .input('Contacto1', sql.Int, data.Contacto1)
            .input('Contacto2', sql.Int, data.Contacto2)
            .input('Categoria', sql.Int, data.Categoria)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('DataInicio', sql.Date, data.DataInicio)
            .input('ImagemPath', sql.NVarChar(sql.MAX), data.ImagemPath)
            .input('Localizacao', sql.Int, data.Localizacao)
            .input('Email', sql.NVarChar(50), data.Email)
            .input('URLPagina', sql.NVarChar(100), data.URLPagina)
            .query(sqlQueries.createBeneficio);
        return insertBeneficio.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateBeneficio = async (vagaId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('beneficios');
        const update = await pool.request()
            .input('IDBeneficio', sql.Int, data.IDBeneficio)
            .input('Titulo', sql.NVarChar(100), data.Titulo)
            .input('Desconto', sql.TinyInt, data.Desconto)
            .input('Contacto1', sql.Int, data.Contacto1)
            .input('Contacto2', sql.Int, data.Contacto2)
            .input('Categoria', sql.Int, data.Categoria)
            .input('Descricao', sql.NVarChar(sql.MAX), data.Descricao)
            .input('DataInicio', sql.Date, data.DataInicio)
            .input('ImagemPath', sql.NVarChar(sql.MAX), data.ImagemPath)
            .input('Localizacao', sql.Int, data.Localizacao)
            .input('Email', sql.NVarChar(50), data.Email)
            .input('URLPagina', sql.NVarChar(100), data.URLPagina)
            .query(sqlQueries.updateBeneficio);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteBeneficio = async (beneficioId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('beneficios');
        const deleteBeneficio = await pool.request()
            .input('beneficioId', sql.Int, beneficioId)
            .query(sqlQueries.deleteBeneficio);
        return deleteBeneficio.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getBeneficios,
    getById,
    createBeneficio,
    updateBeneficio,
    deleteBeneficio
}