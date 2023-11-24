SELECT [IDIdeia]
      ,[Titulo]
      ,A.[NomeArea] AS [AreaIdeia]
      ,I.[Descricao] AS [Descricao]
      ,convert(varchar(15), [DataSubmetida], 105) AS DataSubmetida
      ,L.[Cidade] AS [LocalEmpresa]
      ,[IDPerfil] 
      ,[IDEstado]

FROM [BD22].[sc22_55].[Ideia] I 
  INNER JOIN [BD22].[sc22_55].[AreaIdeia] A ON A.[IDArea] = I.[AreaIdeia]
  INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = I.[LocalEmpresa]
WHERE [IDPerfil]=@IDPerfil