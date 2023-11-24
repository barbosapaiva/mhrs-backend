SELECT I.[IDIdeia],
      I.[Titulo],
      A.[NomeArea] as [AreaIdeia],
      I.[Descricao],
      convert(varchar(10), [DataSubmetida], 23) as DataSubmetida,
      L.[Cidade] as [LocalEmpresa],
      P.[NomeCompleto] as [IDPerfil],
      E.[NomeAbrevi] as [IDEstado]

FROM [BD22].[sc22_55].[Ideia] I 
  INNER JOIN [BD22].[sc22_55].[Perfil] P ON I.[IDPerfil] = p.[IDPerfil]
  INNER JOIN [BD22].[sc22_55].[AreaIdeia] A ON A.[IDArea] = I.[AreaIdeia]
  INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = I.[LocalEmpresa]
  INNER JOIN [BD22].[sc22_55].[Estado] E ON E.[IDEstado] = I.[IDEstado]
WHERE [IDIdeia]=@ideiaId