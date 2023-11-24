'use strict';

const carreiraData = require('../data/carreiras');

const getAllCarreiras = async (req, res, next) => {
    try {
        const carreiralist = await carreiraData.getCarreiras();
        res.send(carreiralist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCarreira = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await carreiraData.createCarreira(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCarreira = async (req, res, next) => {
    try {
        const carreiraId = req.params.id;
        const deletecarreira = await carreiraData.deleteCarreira(carreiraId);
        res.send(deletecarreira);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllCarreiras,
    addCarreira,
    deleteCarreira
}