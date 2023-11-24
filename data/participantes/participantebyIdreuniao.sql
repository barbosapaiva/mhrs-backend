SELECT
    Part.IDPerfil,
    P.NomeCompleto AS [NomeCompleto],
    [IDReuniao],
    P.[ImagemPath],
    P.[Email] as Email

FROM [BD22].[sc22_55].[Participantes] Part
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON Part.[IDPerfil] = p.[IDPerfil]
WHERE [IDReuniao]=@reuniaoId