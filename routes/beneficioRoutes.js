'use strict';

const express = require('express');
const beneficioControll = require('../controllers/beneficioController');
const router = express.Router();

router.get('/beneficios', beneficioControll.getAllBeneficios);
router.get('/beneficio/:id', beneficioControll.getBeneficio);
router.post('/beneficio', beneficioControll.addBeneficio);
router.put('/beneficio/:id', beneficioControll.updateBeneficio);
router.patch('/beneficio/:id', beneficioControll.updateBeneficio);
router.delete('/beneficio/:id', beneficioControll.deleteBeneficio);

module.exports = {
  routes: router
};