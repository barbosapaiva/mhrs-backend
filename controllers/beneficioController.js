'use strict';

const beneficioData = require('../data/beneficios');

const getAllBeneficios = async (req, res, next) => {
    try {
        const beneficiolist = await beneficioData.getBeneficios();
        res.send(beneficiolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getBeneficio = async (req, res, next) => {
    try {
        const beneficioId = req.params.id;
        const beneficio = await beneficioData.getById(beneficioId);
        res.send(beneficio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addBeneficio = async (req, res, next) => {
    try {
      const {
        Titulo,
        Desconto,
        Contacto1,
        Contacto2,
        DataInicio,
        ImagemPath,
        Descricao,
        Email,
        URLPagina,
        Categoria,
        Localizacao
      } = req.body;
      const newBeneficio = {
        Titulo,
        Desconto,
        Contacto1,
        Contacto2,
        DataInicio,
        ImagemPath, 
        Descricao,
        Email,
        URLPagina,
        Categoria,
        Localizacao
      };
      const insert = await beneficioData.createBeneficio(newBeneficio);
      res.send(insert);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };  

const updateBeneficio = async (req, res, next) => {
    try {
        const beneficioId =  req.params.id;
        const data = req.body;
        const updated = await beneficioData.updateBeneficio(beneficioId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBeneficio = async (req, res, next) => {
    try {
        const beneficioId = req.params.id;
        const deletedbeneficio = await beneficioData.deleteBeneficio(beneficioId);
        res.send(deletedbeneficio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllBeneficios,
    getBeneficio,
    addBeneficio,
    updateBeneficio,
    deleteBeneficio
}   