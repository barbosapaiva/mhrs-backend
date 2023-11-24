'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUtilizadores = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const utilizadoresList = await pool.request().query(sqlQueries.utilizadoreslist);
        return utilizadoresList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const createUtilizadorExterno = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const insertUtilizadorExterno = await pool.request()
            .input('PNome', sql.NVarChar(100), data.PNome)
            .input('UNome', sql.NVarChar(100), data.UNome)
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Contacto', sql.Int, data.Contacto)
            .input('Genero', sql.Int, data.Genero)
            .input('DataNascimento', sql.Date, data.DataNascimento)
            .input('Token', sql.NVarChar(100), data.Token)
            .input('Estado', sql.Int, data.Estado)
            .query(sqlQueries.createUtilizadorExterno);
        if (insertUtilizadorExterno.recordset && insertUtilizadorExterno.recordset.length > 0) {

            return insertUtilizadorExterno.recordset[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const createUtilizadorInterno = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const insertUtilizadorInterno = await pool.request()
            .input('PNome', sql.NVarChar(100), data.PNome)
            .input('UNome', sql.NVarChar(100), data.UNome)
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Contacto', sql.Int, data.Contacto)
            .input('Genero', sql.Int, data.Genero)
            .input('DataNascimento', sql.Date, data.DataNascimento)
            .input('NColaborador', sql.Int, data.NColaborador)
            .input('Palavrapasse', sql.NVarChar(100), data.Palavrapasse)
            .input('Funcao', sql.NVarChar(100), data.Funcao)
            .input('Estado', sql.Int, data.Estado)
            .query(sqlQueries.createUtilizadorInterno);
        if (insertUtilizadorInterno.recordset && insertUtilizadorInterno.recordset.length > 0) {

            return insertUtilizadorInterno.recordset[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const getById = async (utilizadorId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const utilizador = await pool.request()
            .input('utilizadorId', sql.Int, utilizadorId)
            .query(sqlQueries.utilizadorbyId);
        return utilizador.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}
const updatePassGlobal = async (IDPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('NovaPalavrapasse', sql.NVarChar(100), data.NovaPalavrapasse)
            .query(sqlQueries.updatePasswordGlobal);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUtilizadorInternoPassword = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Palavrapasse', sql.NVarChar(100), data.Palavrapasse)
            .input('NovaPalavrapasse', sql.NVarChar(100), data.NovaPalavrapasse)
            .query(sqlQueries.updateUtilizadorInternoPassword);
        return update.recordset[0];
    } catch (error) {
        return error.message;
    }
}


const updateUtilizadorInternoTempPassword = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Palavrapasse', sql.NVarChar(100), data.Palavrapasse)
            .query(sqlQueries.updateUtilizadorInternoTempPassword);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUtilizadorEstado = async (utilizadorId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('utilizadorId', sql.Int, utilizadorId)
            .input('Estado', sql.TinyInt, data.Estado)
            .query(sqlQueries.updateUtilizadorEstado);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUtilizadorTipoPerfil = async (utilizadorId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('utilizadorId', sql.Int, utilizadorId)
            .input('TipoPerfil', sql.Int, data.TipoPerfil)
            .query(sqlQueries.updateUtilizadorTipoPerfil);
        return update.recordset[0];
    } catch (error) {
        return error.message;
    }
}

const loginUtilizadorInterno = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const utilizadorInterno = await pool.request()
            .input('Email', sql.NVarChar(100), data.Email)
            .input('Palavrapasse', sql.NVarChar(100), data.Palavrapasse)
            .query(sqlQueries.loginUtilizadorInterno);
     
        if (utilizadorInterno.recordset && utilizadorInterno.recordset.length > 0) {
            return utilizadorInterno.recordset[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const loginUtilizadorExterno = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const utilizadorExterno = await pool.request()
            .input('Email', sql.NVarChar(100), data.Email)
            .query(sqlQueries.loginUtilizadorExterno);
      
        if (utilizadorExterno.recordset && utilizadorExterno.recordset.length > 0) {
            console.log(utilizadorExterno.recordset[0]);
            return utilizadorExterno.recordset[0];
        } else {
            console.log(utilizadorExterno.recordset[0]);
            return null;
        }
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const getUtilizadorPorPerfil = async (IDPerfil) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const utilizador = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .query(sqlQueries.dadosPerfilbyUser);
       
        return utilizador.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateDadosPessoais = async (IDPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('NomeCompleto', sql.NVarChar(100), data.NomeCompleto)
            .input('PNome', sql.NVarChar(50), data.PNome)
            .input('UNome', sql.NVarChar(50), data.UNome)
            .input('Email', sql.NVarChar(50), data.Email)
            .input('Contacto', sql.Int, data.Contacto)
            .input('Genero', sql.Int, data.Genero)
            .input('Distrito', sql.Int, data.Distrito)
            .input('DataNascimento', sql.Date, data.DataNascimento)
            .query(sqlQueries.updateDadosPessoais);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatePerfil = async (IDPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('DescricaoPessoal', sql.NVarChar(500), data.DescricaoPessoal)
            .input('HabilitacaoLiteratia', sql.Int, data.HabilitacaoLiteratia)
            .input('AreaFormacao', sql.Int, data.AreaFormacao)
            .query(sqlQueries.updatePerfil);
      
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateimg = async (IDPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('ImagemPath', sql.NVarChar(100), data.ImagemPath)
            .query(sqlQueries.updateImagem);
       
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}


const updatecv = async (IDPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('CV', sql.Bit, data.CV)
            .input('NomeFichCV', sql.NVarChar(100), data.NomeFichCV)
            .query(sqlQueries.updateCV);
       
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateperfiltodo = async (IDPerfil, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const update = await pool.request()
            .input('IDPerfil', sql.Int, IDPerfil)
            .input('NomeCompleto', sql.NVarChar(100), data.NomeCompleto)
            .input('PNome', sql.NVarChar(50), data.PNome)
            .input('UNome', sql.NVarChar(50), data.UNome)      
            .input('Contacto', sql.Int, data.Contacto)    
            .input('Distrito', sql.NVarChar(50), data.Distrito)
            .input('DataNascimento', sql.Date, data.DataNascimento)
            .input('DescricaoPessoal', sql.NVarChar(1000), data.DescricaoPessoal)
            .input('HabilitacaoLiteratia', sql.NVarChar(100), data.HabilitacaoLiteratia)
            .input('AreaFormacao', sql.NVarChar(100), data.AreaFormacao)
            .input('CV', sql.Bit, data.CV)
            .input('NomeFichCV', sql.NVarChar(1000), data.NomeFichCV)
            .input('ImagemPath', sql.NVarChar(1000), data.ImagemPath)
            .input('Funcao', sql.NVarChar(50), data.Funcao)
            .input('Departamento', sql.NVarChar(50), data.Departamento)
            .query(sqlQueries.updatePerfilCompleto);
       
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

async function getValidaUtilizador(loginExterno) {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('utilizadores');
        const utilizadorExterno = await pool.request()
            .input('Email', sql.NVarChar(100), loginExterno.Email)
            .query(sqlQueries.loginUtilizadorExterno);

        if (utilizadorExterno.recordset && utilizadorExterno.recordset.length > 0) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error.message);
        return false;
    }
}


module.exports = {
    getUtilizadores,
    createUtilizadorExterno,
    createUtilizadorInterno,
    getById,
    updateUtilizadorInternoPassword,
    updateUtilizadorInternoTempPassword,
    updateUtilizadorEstado,
    updateUtilizadorTipoPerfil,
    loginUtilizadorInterno,
    loginUtilizadorExterno,
    getUtilizadorPorPerfil,
    updateDadosPessoais,
    updatePerfil,
    updatecv,
    updateimg,
    updateperfiltodo,
    updatePassGlobal,
    getValidaUtilizador
}