SELECT
    [IDReuniao],
    R.[Assunto],
    R.[Descricao],
    CONVERT(varchar(10), R.[DataReuniao], 23) AS DataReuniao,
    convert(varchar(5), R.[HoraReuniao], 108) as [HoraReuniao],
    [TipoLocal],
    [LocalReuniao],
    P.[NomeCompleto] AS [IDPerfil],
    P.[IDPerfil] as IDPerf,
    P.[ImagemPath] as ImagemPath,
    Proj.[NomeProjeto] AS [IDNegocio],
    R.[IDNegocio] as IDNeg,
    DocumentoPath,
    Notas,
    R.[Estado] AS [Estado],
    C.[NomeCliente] as NomeCliente,
    Carr.[Tipo] as AreaProjeto,
    ES.[NomeAbrevi] as [NomeAbrevi]
FROM [BD22].[sc22_55].[Reuniao] R
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON R.[IDPerfil] = P.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Negocio] N ON N.[IDNegocio] = R.[IDNegocio]
    INNER JOIN [BD22].[sc22_55].[Cliente] C ON C.[IDCliente] = N.[IDCliente]
    INNER JOIN [BD22].[sc22_55].[Projeto] Proj ON N.[IDProjeto] = Proj.[IDProjeto]
    INNER JOIN [BD22].[sc22_55].[Estado] ES ON ES.[IDEstado] = R.[Estado]
    INNER JOIN [BD22].[sc22_55].[Carreira] Carr ON Carr.[IDCarreira] = Proj.[AreaProjeto]
WHERE R.[IDNegocio] = @negocioId;
