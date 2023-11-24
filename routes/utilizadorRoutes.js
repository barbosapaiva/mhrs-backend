'use strict';

const express = require('express');
const utilizadorControll = require('../controllers/utilizadorController');
const router = express.Router();

router.get('/utilizadores', utilizadorControll.getAllUtilizadores);
router.post('/utilizador/externo', utilizadorControll.addUtilizadorExterno);
router.post('/utilizador/interno', utilizadorControll.addUtilizadorInterno);
router.get('/utilizador/:id', utilizadorControll.getUtilizador);
//router.get('/utilizador/loginExterno/:email', utilizadorControll.loginUtilizadorExterno);
router.post('/utilizador/loginExterno/', utilizadorControll.loginUtilizadorExterno);
router.post('/utilizador/loginInterno/', utilizadorControll.loginUtilizadorInterno);
router.get('/utilizador/perfil/:id', utilizadorControll.getUtilizadorPerfil);
router.put('/utilizador/estado/:id', utilizadorControll.updateUtilizadorEstado);
router.put('/utilizador/tipoperfil/:id', utilizadorControll.updateUtilizadorTipoPerfil);
router.put('/utilizador/passwordprofile/:id', utilizadorControll.updatePasswordGlobal);
router.put('/utilizador/password/', utilizadorControll.updateUtilizadorInternoPassword);
router.put('/utilizador/temppassword/', utilizadorControll.updateUtilizadorInternoTempPassword);
router.put('/dadospessoais/:id', utilizadorControll.updateDadosPessoais);
router.put('/perfil/:id', utilizadorControll.updatePerfil);
router.put('/perfilcv/:id', utilizadorControll.updateCV);
router.put('/perfilimagem/:id', utilizadorControll.updateimg);
router.put('/perfilcompleto/:id', utilizadorControll.updatePerfilCompleto);
router.post('/utilizador/valida/', utilizadorControll.ValidaUtilizador);
module.exports = {
    routes: router
}