SELECT [IDInteracao]
      ,I.[IDCliente]
	  ,C.NomeCliente
      ,I.[IDPerfil]
      ,I.[IDNegocio]
	  ,P.[NomeProjeto] as [NomeProjeto]
      ,convert(varchar(15), [Data_Interacao], 105) as [Data_Interacao]
      ,I.[Descricao]
      ,[Tipo_Interacao]
      ,[Anexo]
      ,[Canal]
      ,[Titulo]
  FROM [BD22].[sc22_55].[Interacao] I
inner join [BD22].[sc22_55].[Cliente] C ON  C.IDCliente = I.IDCliente
inner join [BD22].[sc22_55].[Negocio] N ON N.IDNegocio = I.IDNegocio
inner join [BD22].[sc22_55].[Projeto] P ON P.IDProjeto = N.IDProjeto
WHERE I.[IDPerfil]=@IDPerfil AND I.[IDNegocio]=@IDNegocio