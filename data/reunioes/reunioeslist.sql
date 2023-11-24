SELECT
    [IDReuniao],
    [Assunto],
    R.[Descricao],
    CONVERT(varchar(10), [DataReuniao], 23) AS DataReuniao,
    [HoraReuniao],
    CONVERT(varchar(10), [HoraReuniao], 108) AS horameeting,
    [TipoLocal],
    [LocalReuniao],
    P.[NomeCompleto] AS [IDPerfil],
    P.[ImagemPath] as ImagemPath,
    Proj.[NomeProjeto] AS [IDNegocio],
    DocumentoPath,
    Notas,
    R.[Estado] AS [Estado]
FROM [BD22].[sc22_55].[Reuniao] R
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON R.[IDPerfil] = P.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Negocio] N ON N.[IDNegocio] = R.[IDNegocio]
    INNER JOIN [BD22].[sc22_55].[Projeto] Proj ON N.[IDProjeto] = Proj.[IDProjeto]
