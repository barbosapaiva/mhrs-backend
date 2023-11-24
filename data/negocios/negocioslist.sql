SELECT [IDNegocio],
       C.[NomeCliente] AS [IDCliente],
       P.[NomeCompleto] AS [IDPerfil],
       N.[IDPerfil] as IDPerf,
       E.[NomeAbrevi] as [IDEstado],
       N.[IDEstado] as [Estado],
       Proj.[NomeProjeto] as [NomeProjeto],
       N.[IDProjeto] as [IDProjeto],
       Carr.[Tipo] as [Area],
       T.[TipoProjeto] as [TipoProjeto],
       Proj.[Descricao] AS [Descricao],
       convert(varchar(10), [DataSubmissao], 23) as DataSubmissao,
       P.[ImagemPath] as ImagemPath
       
FROM Negocio N
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON N.[IDPerfil] = P.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Cliente] C ON N.[IDCliente] = C.[IDCliente]
    INNER JOIN [BD22].[sc22_55].[Estado] E ON E.[IDEstado] = N.[IDEstado]
    INNER JOIN [BD22].[sc22_55].[Projeto] Proj ON Proj.[IDProjeto] = N.[IDProjeto]
    INNER JOIN [BD22].[sc22_55].[Carreira] Carr ON Carr.[IDCarreira] = Proj.[AreaProjeto]
    INNER JOIN [BD22].[sc22_55].[TipoProjeto] T ON T.[IDTipoProjeto] = Proj.[TipoProjeto]