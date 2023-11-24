'use strict';

const areaideiaData = require('../data/areaideias');


const getAllareaideias = async (req, res, next) => {
    try {
        const areaideiaDatalist = await areaideiaData.getAreaIdeia();
        res.send(areaideiaDatalist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllareaideias
}