'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getClientes = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clientes');
        const clientesList = await pool.request().query(sqlQueries.clienteslist);
        return clientesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async (clienteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clientes');
        const cliente = await pool.request()
            .input('clienteId', sql.Int, clienteId)
            .query(sqlQueries.clientebyId);
        return cliente.recordset;
    } catch (error) {
        return error.message;
    }
}

const createCliente = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clientes');
        const insertCliente = await pool.request()
            .input('NomeCliente', sql.NVarChar(100), data.NomeCliente)
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Endereco', sql.NVarChar(100), data.Endereco)
            .input('Localidade', sql.Int, data.Localidade)
            .input('Contacto1', sql.NVarChar(12), data.Contacto1)
            .input('Contacto2', sql.NVarChar(12), data.Contacto2)
            .input('Contacto3', sql.NVarChar(12), data.Contacto3)
            .input('NIFEmpresa', sql.NVarChar(10), data.NIFEmpresa)
            .query(sqlQueries.createCliente);
        return insertCliente.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateCliente = async (clienteId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clientes');
        const update = await pool.request()
            .input('clienteId', sql.Int, clienteId)
            .input('NomeCliente', sql.NVarChar(100), data.NomeCliente)
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Endereco', sql.NVarChar(100), data.Endereco)
            .input('Localidade', sql.NVarChar(100), data.Localidade)
            .input('Contacto1', sql.NVarChar(12), data.Contacto1)
            .input('Contacto2', sql.NVarChar(12), data.Contacto2)
            .input('Contacto3', sql.NVarChar(12), data.Contacto3)
            .input('NIFEmpresa', sql.NVarChar(10), data.NIFEmpresa)
            .query(sqlQueries.updateCliente);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteCliente = async (clienteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('clientes');
        const deleteCliente = await pool.request()
            .input('clienteId', sql.Int, clienteId)
            .query(sqlQueries.deleteCliente);
        return deleteCliente.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getClientes,
    getById,
    createCliente,
    updateCliente,
    deleteCliente
}