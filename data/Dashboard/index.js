// index.js

const sql = require('mssql');
const config = require('../../config');


// Função para obter os nomes das funções
const getTotalVagasAtivasPorCarreira = async () => {
    try {
        await sql.connect(config.sql);
        const result = await sql.query(`
    SELECT C.Tipo AS Carreira, COUNT(*) AS TotalVagasAtivas
	FROM Vaga V
		INNER JOIN Carreira C ON V.CarreiraAssociada = C.IDCarreira
	WHERE V.Estado = 1 --estado 1 representa ativo
	GROUP BY C.Tipo
    `);
        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter total de vagas ativas por carreira: ' + error.message);

    }
};

const CandidaturasPorPerfil = async (idPerfil) => {
    try {
        await sql.connect(config.sql);
        const result = await sql.query(
            `SELECT
            P.NomeCompleto AS [Utilizador],
            E.NomeAbrevi as Estado,
            COUNT(*) AS NumeroCandidaturas
        FROM
            Perfil P
            JOIN Candidatura_Vaga V ON P.IDPerfil = V.IDPerfil
	        JOIN Estado E on E.IDEstado = V.IDEstado
        WHERE
            P.IDPerfil = ${idPerfil}
        GROUP BY
            P.NomeCompleto,
            E.NomeAbrevi;`,
            {
                idPerfil: idPerfil,
            }
        );
        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter candidaturas/estado de perfil: ' + error.message);
    }
};

const NegociosPorPerfil = async (idPerfil) => {
    try {

        await sql.connect(config.sql);
        const result = await sql.query(
            `SELECT
                    P.NomeCompleto AS Utilizador,
                    E.NomeAbrevi as Estado,
                    COUNT(*) AS NumeroNegocios
            FROM
                Perfil P
                JOIN Negocio N ON P.IDPerfil = N.IDPerfil
	            JOIN Estado E on E.IDEstado = N.IDEstado
            WHERE
                P.IDPerfil = ${idPerfil}
            GROUP BY
                P.NomeCompleto,
                 E.NomeAbrevi`,
            {
                idPerfil: idPerfil,
            }
        );
        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter neogicos/estado de perfil: ' + error.message);
    }
};

const EstatisticasPerfil = async (idPerfil) => {
    try {

        await sql.connect(config.sql);
        const result = await sql.query(
            `SELECT
          P.NomeCompleto AS [Utilizador],
          (SELECT COUNT(*) FROM Candidatura_Vaga WHERE IDPerfil = P.IDPerfil) AS QuantidadeCandidaturas,
          (SELECT COUNT(*) FROM Ideia WHERE IDPerfil = P.IDPerfil) AS QuantidadeIdeias,
          (SELECT COUNT(*) FROM Negocio WHERE IDPerfil = P.IDPerfil) AS QuantidadeNegocios
        FROM Perfil P
        WHERE P.IDPerfil = ${idPerfil}`,
            {
                idPerfil: idPerfil, // Parameterize the query to prevent SQL injection
            }
        );
        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter estatísticas de perfil: ' + error.message);
    }
};


const TotalUsers = async () => {
    try {

        await sql.connect(config.sql);
        const result = await sql.query(
            `
      SELECT COUNT(*) AS total FROM Perfil;
      `,

        );
        const totalusers = [
            { Perfil: 'Total de Utilizadores', TotalUsers: result.recordset[0].total }
        ];

        return totalusers;

    } catch (error) {
        throw new Error('Erro ao total utilizadores: ' + error.message);
    }
};


const TotalColaboradores = async () => {
    try {

        await sql.connect(config.sql);
        const result = await sql.query(
            `
      SELECT COUNT(*) AS total FROM Colaborador;
      `,

        );
        const totalColaboradores = [
            { Perfil: 'Total de Colaboradores', TotalColaboradores: result.recordset[0].total }
        ];

        return totalColaboradores;
    } catch (error) {
        throw new Error('Erro ao total Colaboradores: ' + error.message);
    }
};


const NegociosAtivos = async () => {
    try {

        await sql.connect(config.sql);
        const result = await sql.query(
            `
      SELECT COUNT(*) AS total FROM Negocio;
      `,

        );
        const negociosAtivos = [
            { Perfil: 'Negocios Ativos', NegociosAtivos: result.recordset[0].total }
        ];

        return negociosAtivos;
    } catch (error) {
        throw new Error('Erro Negocios Ativos: ' + error.message);
    }
};


const TotalCandidaturas = async () => {
    try {

        await sql.connect(config.sql);
        const result = await sql.query(
            `
      SELECT COUNT(*) AS total FROM Candidatura_Vaga;
      `,

        );
        const totalcandidaturas = [
            { Perfil: 'Total de Candidaturas', TotalCandidaturas: result.recordset[0].total }
        ];
        return totalcandidaturas;
    } catch (error) {
        throw new Error('Erro ao total Candidaturas: ' + error.message);
    }
};

const getTotalCandidaturas = async () => {
    try {
        await sql.connect(config.sql);
        const result = await sql.query(`
      SELECT MONTH(DataCandidatura) AS Mes, COUNT(*) AS totalCandidaturas
      FROM Candidatura_Vaga
      GROUP BY MONTH(DataCandidatura);
    `);

        if (result.recordset.length === 0) {
            // Caso não haja candidaturas, retornar um array vazio
            return [];
        }

        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter total de candidaturas: ' + error.message);
    }
};

const TotalCandidaturasbyEstado = async () => {
    try {
        await sql.connect(config.sql);
        const result = await sql.query(`
    SELECT E.Descricao AS Estado, COUNT(*) AS totalCandidaturas
    FROM Candidatura_Vaga CV JOIN Estado E ON CV.IDEstado = E.IDEstado
    GROUP BY CV.IDEstado, E.Descricao;
    `);


        if (result.recordset.length === 0) {
            // Caso não haja candidaturas, retornar um array vazio
            return [];
        }

        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter total de candidaturas: ' + error.message);
    }
};


const TotalNegociosbyEstado = async () => {
    try {
        await sql.connect(config.sql);
        const result = await sql.query(`
    SELECT E.Descricao AS Estado, COUNT(*) AS totalNegocios
    FROM Negocio N JOIN Estado E ON N.IDEstado = E.IDEstado
    GROUP BY N.IDEstado, E.Descricao;
    `);


        if (result.recordset.length === 0) {
            // Caso não haja candidaturas, retornar um array vazio
            return [];
        }

        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter total de candidaturas: ' + error.message);
    }
};


const getTotalIdeiasMes = async () => {
    try {
        await sql.connect(config.sql);
        const result = await sql.query(`
      SELECT MONTH(DataSubmetida) AS Mes, COUNT(*) AS totalIdeias
      FROM Ideia
      GROUP BY MONTH(DataSubmetida);
    `);

        if (result.recordset.length === 0) {
            // Caso não haja candidaturas, retornar um array vazio
            return [];
        }

        return result.recordset;
    } catch (error) {
        throw new Error('Erro ao obter total de candidaturas: ' + error.message);
    } finally {
        sql.close();
    }
};





module.exports = {
    // getProcedimentos,
    getTotalVagasAtivasPorCarreira,
    EstatisticasPerfil,
    TotalUsers,
    TotalColaboradores,
    NegociosAtivos,
    TotalCandidaturas,
    getTotalCandidaturas,
    TotalCandidaturasbyEstado,
    TotalNegociosbyEstado,
    getTotalIdeiasMes,
    NegociosPorPerfil,
    CandidaturasPorPerfil
};