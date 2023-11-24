SELECT [IDInteracao]
      ,I.[IDCliente]
	    ,C.NomeCliente
      ,I.[IDPerfil] /*quem criou a interação*/
      ,Perf.[ImagemPath] as PerfilImagemPath
	    ,Perf.[NomeCompleto] as NomeCompleto
      ,I.[IDNegocio]
      ,N.[IDCliente] as IDClienteNegocio
      ,PerfilNegocio.[NomeCompleto] as PerfilNegocioNomeCompleto
      ,PerfilNegocio.[ImagemPath] as PerfilNegocioImagemPath
	    ,P.[NomeProjeto] as [NomeProjeto]
      ,convert(varchar(15), [Data_Interacao], 23) as [Data_Interacao]
      ,I.[Descricao]
      ,[Tipo_Interacao]
	    ,TI.[Nome] as Interacao
      ,[Anexo]
      ,[Canal]
	    ,CC.[Nome] as NomeCanal
      ,[Titulo]
  FROM [BD22].[sc22_55].[Interacao] I
inner join [BD22].[sc22_55].[Cliente] C ON  C.IDCliente = I.IDCliente
inner join [BD22].[sc22_55].[Perfil] Perf ON  Perf.IDPerfil = I.IDPerfil
inner join [BD22].[sc22_55].[Negocio] N ON N.IDNegocio = I.IDNegocio
inner join [BD22].[sc22_55].[Perfil] PerfilNegocio ON  PerfilNegocio.IDPerfil = N.IDPerfil
inner join [BD22].[sc22_55].[Projeto] P ON P.IDProjeto = N.IDProjeto
inner join [BD22].[sc22_55].Canal_Comunicacao CC ON CC.IDCanal = I.Canal
inner join [BD22].[sc22_55].Tipo_Interacao TI ON TI.IDTipointeracao = I.Tipo_Interacao
WHERE I.[IDNegocio]=@negocioId
