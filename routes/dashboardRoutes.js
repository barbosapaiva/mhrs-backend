const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Rota para obter os dados do Dashboard
router.get('/dashboard/total-vagas-ativas', dashboardController.getTotalVagasAtivasPorCarreira);
router.get('/dashboard/estatisticas/:parametro', dashboardController.getEstatisticas);
router.get('/dashboard/totalusers', dashboardController.getTotalUsers);
router.get('/dashboard/totalcolaboradores', dashboardController.getTotalColaboradores);
router.get('/dashboard/negociosativos', dashboardController.getNegociosAtivos);
router.get('/dashboard/totalcandidaturas', dashboardController.getTotalCandidatura);
router.get('/dashboard/totalcandidaturasbyestado', dashboardController.TotalCandidaturasbyEstado);
router.get('/dashboard/totalnegociosbyestado', dashboardController.TotalNegociosbyEstado);
router.get('/dashboard/candidaturassubmetidas', dashboardController.getTotalCandidaturas);
router.get('/dashboard/ideiassubmetidas', dashboardController.getTotalIdeiasMes);
router.get('/dashboard/candidaturasperfil/:parametro', dashboardController.CandidaturasPorPerfil);
router.get('/dashboard/negociosperfil/:parametro', dashboardController.NegociosPorPerfil);


module.exports = {
    routes: router
}
