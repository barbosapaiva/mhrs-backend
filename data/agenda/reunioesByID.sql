SELECT R.[IDReuniao]
    ,R.[Assunto]
    ,R.[Descricao]
    ,CONVERT(VARCHAR(10), [DataReuniao], 23) AS DataReuniao
    ,CONVERT(VARCHAR(5), [HoraReuniao], 108) AS HoraReuniao
    ,[TipoLocal]
    ,[LocalReuniao]
    ,R.[IDPerfil]
    ,R.[IDNegocio]
    ,Proj.[NomeProjeto] AS [NomeProjeto]
    ,[DocumentoPath]
    ,[Notas]
    ,[Estado]
FROM [BD22].[sc22_55].[Reuniao] R
INNER JOIN [BD22].[sc22_55].[Participantes] P ON R.[IDReuniao] = P.[IDReuniao]
INNER JOIN [BD22].[sc22_55].[Negocio] N ON N.[IDNegocio] = R.[IDNegocio]
INNER JOIN [BD22].[sc22_55].[Projeto] Proj ON N.[IDProjeto] = Proj.[IDProjeto]
WHERE P.[IDPerfil] = @idPerfil
ORDER BY DATEPART(HOUR, [HoraReuniao]) * 60 + DATEPART(MINUTE, [HoraReuniao]);