SELECT [IDVaga],
       [Titulo],
       V.[Descricao],
       [Descricao_BeneficiosVaga],
       [TipoVaga],
       convert(varchar(10), [DataAbertura], 23) as DataAbertura,
       [NumVagas], 
       P.[NomeCompleto] AS [Autor],
       L.[Cidade] AS [Localizacao],
       C.[Tipo] AS [CarreiraAssociada],
       E.[Tipo] AS [Experiencia],
       V.[Estado] AS [Estado]

FROM [BD22].[sc22_55].[Vaga] V
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON V.[IDAutor] = p.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Experiencia] E ON E.[IDExperiencia] = V.[Experiencia]
    INNER JOIN [BD22].[sc22_55].[Carreira] C ON C.[IDCarreira] = V.[CarreiraAssociada]
    INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = V.[Localizacao]
WHERE [IDVaga]=@vagaId