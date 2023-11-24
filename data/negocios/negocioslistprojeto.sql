SELECT IDNegocio,
       Proj.NomeProjeto as NomeProjeto
FROM Negocio N
    INNER JOIN BD22.sc22_55.Projeto Proj ON Proj.IDProjeto = N.IDProjeto;
