SELECT [IDAviso]
      ,[Titulo]
      ,[Descricao]
      ,[IDPerfil]
      ,CONVERT(varchar(15), [Data_Criacao], 105) as [Data_Criacao]     
      ,[Estado]
      ,[Lido]
  FROM [BD22].[sc22_55].[Aviso]
 WHERE [IDPerfil]=@IDPerfil
 
 order by Data_Criacao desc, lido asc