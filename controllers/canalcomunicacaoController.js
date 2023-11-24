'use strict';

const canacomunicData = require('../data/canalcomunicacao');

const getAllCanal = async (req, res, next) => {
    try {
        const canallist = await canacomunicData.getcanalcomuni();
        res.send(canallist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllCanal
}