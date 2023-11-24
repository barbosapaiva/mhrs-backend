SELECT [IDAviso]
      ,[Titulo]
      ,[Descricao]
      ,[IDPerfil]
      ,CONVERT(varchar(15), [Data_Criacao], 105) as [Data_Criacao]     
      ,[Estado]
      ,[Lido]
  FROM [BD22].[sc22_55].[Aviso]
 WHERE [IDPerfil]=@IDPerfil and [Lido]= 0
 order by Data_Criacao desc