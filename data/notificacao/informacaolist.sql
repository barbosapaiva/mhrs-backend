SELECT [IDInformacao]
      ,[Titulo]
      ,[Descricao]
      ,CONVERT(varchar(15), [Data_Criacao], 105) as [Data_Criacao]     
      ,[Estado]
  FROM [BD22].[sc22_55].[Informacao]
  ORDER BY [Data_Criacao] DESC;