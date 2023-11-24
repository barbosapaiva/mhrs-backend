SELECT [IDAviso]
      ,[Titulo]
      ,[Descricao]
      ,[IDPerfil]
      ,CONVERT(varchar(15), [Data_Criacao], 105) as [Data_Criacao]     
      ,[Estado]
      ,[Lido]
FROM [BD22].[sc22_55].[Aviso]
ORDER BY [Data_Criacao] DESC;
