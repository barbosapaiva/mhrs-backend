SELECT [IDCandidatura]
      ,C.[CV]
      ,C.[NomeFichCV]
      ,[CartaMotivacao]
      ,convert(varchar(10), [DataCandidatura], 23) as DataCandidatura
      ,V.[Titulo]
	  ,E.[Tipo] as [TipoVaga]
	  ,L.[Cidade]
      ,C.[IDPerfil]
      ,T.[TipoCandidatura]
      ,[NomeCandidato]
      ,[ContactoCandidato]
      ,[EmailCandidato]
      ,C.[IDEstado]
      ,ES.[NomeAbrevi] as [Estado]
      ,P.[ImagemPath] as ImagemPath
      ,P.[PNome]
      ,P.[UNome]
      ,P.[CV]
      ,P.[NomeFichCV] as NomeFichCVPerfil
      FROM [BD22].[sc22_55].[Candidatura_Vaga] C
            INNER JOIN [BD22].[sc22_55].[Perfil] P ON C.[IDPerfil] = P.[IDPerfil]
            INNER JOIN [BD22].[sc22_55].[Vaga] V ON V.[IDVaga] = C.[IDVaga]
            INNER JOIN [BD22].[sc22_55].[TipoCandidatura] T ON T.[IDTipoCandidatura] = C.[TipoCandidatura]
			INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = V.[Localizacao]
			INNER JOIN [BD22].[sc22_55].[Experiencia] E ON E.[IDExperiencia] = V.[Experiencia]
            INNER JOIN [BD22].[sc22_55].[Estado] ES ON ES.[IDEstado] = C.[IDEstado]
WHERE [IDCandidatura] = @candidaturaId