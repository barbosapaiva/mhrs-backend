SELECT [IDProjeto],
       [NomeProjeto],
       C.[Tipo] AS [AreaProjeto],
       T.[TipoProjeto] AS [TipoProjeto],
       Cli.[NomeCliente] AS [IDCliente],
       P.[Descricao]

FROM [BD22].[sc22_55].[Projeto] P
    INNER JOIN [BD22].[sc22_55].[Carreira] C ON C.[IDCarreira] = P.[AreaProjeto]
    INNER JOIN [BD22].[sc22_55].[Cliente] Cli ON P.[IDCliente] = Cli.[IDCliente]
    INNER JOIN [BD22].[sc22_55].[TipoProjeto] T ON T.[IDTipoProjeto] = P.[TipoProjeto]
