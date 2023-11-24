const dashboardController = {};

const sql = require('mssql');

// Importar os módulos necessários
const dashboardModel = require('../data/Dashboard');
const config = require('../config');

// Rota para obter os dados do Dashboard
dashboardController.getTotalVagasAtivasPorCarreira = async (req, res, next) => {
    try {


        const dadosVagasAtivas = await dashboardModel.getTotalVagasAtivasPorCarreira();

        const dataVagasAtivas = dadosVagasAtivas.map(item => ({
            label: item.Carreira,
            value: item.TotalVagasAtivas
        }));

        const response = {
            vagasAtivas: dataVagasAtivas,

        };

        res.json(response);
    } catch (error) {
        next(error);
    }
};

dashboardController.CandidaturasPorPerfil = async (req, res, next) => {
    try {
        const parametro = req.params.parametro;
        const dadosCandidaturaPorPerfil = await dashboardModel.CandidaturasPorPerfil(parametro);

        // Criar um array com as informações de cada categoria
        const dadoscandidatura = [
            {
                label: dadosCandidaturaPorPerfil.map(item => item.Estado),
                value: dadosCandidaturaPorPerfil.map(item => item.NumeroCandidaturas),
            }
        ];

        res.json(dadoscandidatura);
    } catch (error) {
        next(error);
    }
};


dashboardController.NegociosPorPerfil = async (req, res, next) => {
    try {
        const parametro = req.params.parametro;
        const dadosNegociosPorPerfil = await dashboardModel.NegociosPorPerfil(parametro);

        // Criar um array com as informações de cada categoria
        const dadosnegocios = [
            {
                label: dadosNegociosPorPerfil.map(item => item.Estado),
                value: dadosNegociosPorPerfil.map(item => item.NumeroNegocios),
            }
        ];

        res.json(dadosnegocios);
    } catch (error) {
        next(error);
    }
};




dashboardController.getEstatisticas = async (req, res, next) => {
    try {
        const parametro = req.params.parametro;
        const dadosEstatisticasPerfil = await dashboardModel.EstatisticasPerfil(parametro);

        // Criar um array com as informações de cada categoria
        const dataEstatisticasPerfil = [
            {
                label: 'Candidaturas Submetidas',
                value: dadosEstatisticasPerfil.map(item => item.QuantidadeCandidaturas),
            },
            {
                label: 'Ideias Submetidas',
                value: dadosEstatisticasPerfil.map(item => item.QuantidadeIdeias),
            },
            {
                label: 'Negocios Submetidos',
                value: dadosEstatisticasPerfil.map(item => item.QuantidadeNegocios),
            },
        ];

        const rsp = {
            estatisticasPerfil: dataEstatisticasPerfil,
        };

        res.json(rsp);
    } catch (error) {
        next(error);
    }
};


dashboardController.getTotalUsers = async (req, res, next) => {
    try {
        const dadosTotalUsers = await dashboardModel.TotalUsers();

        // Criar um array com as informações de cada categoria
        const dataTotalUsers = dadosTotalUsers.map(item => ({
            label: 'Total Utilizadores',
            value: item.TotalUsers
        }));
        const r = {
            totalUsers: dataTotalUsers,
        };

        res.json(r);
    } catch (error) {
        next(error);
    }
};

dashboardController.getTotalColaboradores = async (req, res, next) => {
    try {
        const dadosTotalColaboradores = await dashboardModel.TotalColaboradores();

        // Criar um array com as informações de cada categoria
        const dataTotalColaboradores = dadosTotalColaboradores.map(item => ({
            label: 'Total Colaboradores',
            value: item.TotalColaboradores
        }));
        const c = {
            totalColaboradores: dataTotalColaboradores,
        };

        res.json(c);
    } catch (error) {
        next(error);
    }
};

dashboardController.getTotalCandidatura = async (req, res, next) => {
    try {
        const dadosTotalCandidatura = await dashboardModel.TotalCandidaturas();

        // Criar um array com as informações de cada categoria
        const dataTotalCandidatura = dadosTotalCandidatura.map(item => ({
            label: 'Total Candidaturas',
            value: item.TotalCandidaturas
        }));

        const tc = {
            totalCandidatura: dataTotalCandidatura,
        };

        res.json(tc);
    } catch (error) {
        next(error);
    }
};

dashboardController.getNegociosAtivos = async (req, res, next) => {
    try {
        const dadosNegociosAtivos = await dashboardModel.NegociosAtivos();

        // Criar um array com as informações de cada categoria
        const dataNegociosAtivos = dadosNegociosAtivos.map(item => ({
            label: 'Negócios Ativos',
            value: item.NegociosAtivos
        }));
        const n = {
            negociosAtivos: dataNegociosAtivos,
        };

        res.json(n);
    } catch (error) {
        next(error);
    }
};


dashboardController.getTotalCandidaturas = async (req, res, next) => {
  try {
    const dadosTotalCandidaturas = await dashboardModel.getTotalCandidaturas();
    const nomeMeses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    // Criar um array com as informações de cada categoria
    const dataTotalCandidaturas = dadosTotalCandidaturas.map(item => ({
      label: nomeMeses[item.Mes - 1], // Subtrai 1 do mês para corresponder ao índice do array
      value: item.totalCandidaturas
    })); 
    const c = {
      candidatura: dataTotalCandidaturas,
    };

        res.json(c);
    } catch (error) {
        next(error);
    }
};

dashboardController.TotalCandidaturasbyEstado = async (req, res, next) => {
  try {
    const dadosTotalCandidaturasbyEstado = await dashboardModel.TotalCandidaturasbyEstado();
    // Criar um array com as informações de cada categoria
    const dataTotalCandidaturasbyEstado = dadosTotalCandidaturasbyEstado.map(item => ({
      label: `${item.Estado}`,
      value: item.totalCandidaturas
    })); 
    
  
    const CE = {
      candidaturaEstado: dataTotalCandidaturasbyEstado,
    };

    res.json(CE);  
  } catch (error) {
    next(error);
  }
};


dashboardController.TotalNegociosbyEstado = async (req, res, next) => {
  try {
    const dadosTotalNegociosbyEstado = await dashboardModel.TotalNegociosbyEstado();
    // Criar um array com as informações de cada categoria
    const dataTotalNegociosbyEstado = dadosTotalNegociosbyEstado.map(item => ({
      label: `${item.Estado}`,
      value: item.totalNegocios
    })); 
    
    const NE = {
      negociosEstado: dataTotalNegociosbyEstado,
    };

    res.json(NE);  
  } catch (error) {
    next(error);
  }
};

dashboardController.getTotalIdeiasMes = async (req, res, next) => {
  try {
    const dadosTotalIdeiasMes = await dashboardModel.getTotalIdeiasMes();
    const nomeMeses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    // Criar um array com as informações de cada categoria
    const dataTotalIdeiasMes = dadosTotalIdeiasMes.map(item => ({
      label: nomeMeses[item.Mes - 1],
      value: item.totalIdeias
    })); 
    const i = {
      ideia: dataTotalIdeiasMes,
    };

        res.json(i);
    } catch (error) {
        next(error);
    }
};




module.exports = dashboardController;