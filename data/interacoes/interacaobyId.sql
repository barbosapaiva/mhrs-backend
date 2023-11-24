SELECT [IDInteracao]
      ,[IDCliente]
      ,[IDPerfil]
      ,[IDNegocio]
      ,convert(varchar(15), [Data_Interacao], 105) as [Data_Interacao]
      ,[Descricao]
      ,[Tipo_Interacao]
      ,[Anexo]
      ,[Canal]
      ,[Titulo]
  FROM [BD22].[sc22_55].[Interacao]
  WHERE [IDInteracao]=@interacaoid