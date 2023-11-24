SELECT [IDNegocio]
       ,N.[IDCliente]
       ,C.[NomeCliente] AS [NomeCliente]
       ,[IDPerfil]
       ,E.[NomeAbrevi] as [IDEstado]
       ,Proj.[NomeProjeto] as [NomeProjeto]
       ,N.[IDProjeto] AS [IDProjeto]
       ,Carr.[Tipo] as [Area]
       ,T.[TipoProjeto] as [TipoProjeto]
       ,Proj.[Descricao] AS [Descricao]
       ,CONVERT(varchar(15), [DataSubmissao], 105) as DataSubmissao     
FROM [BD22].[sc22_55].[Negocio] N
    INNER JOIN [BD22].[sc22_55].[Cliente] C ON N.[IDCliente] = C.[IDCliente]
    INNER JOIN [BD22].[sc22_55].[Estado] E ON E.[IDEstado] = N.[IDEstado]
    INNER JOIN [BD22].[sc22_55].[Projeto] Proj ON Proj.[IDProjeto] = N.[IDProjeto]
    INNER JOIN [BD22].[sc22_55].[Carreira] Carr ON Carr.[IDCarreira] = Proj.[AreaProjeto]
    INNER JOIN [BD22].[sc22_55].[TipoProjeto] T ON T.[IDTipoProjeto] = Proj.[TipoProjeto]
WHERE [IDPerfil]=@IDPerfil