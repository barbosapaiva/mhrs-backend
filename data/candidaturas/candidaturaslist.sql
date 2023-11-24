SELECT C.[IDCandidatura]
      ,C.[CV]
      ,C.[NomeFichCV]
      ,C.[CartaMotivacao]
      ,convert(varchar(10), [DataCandidatura], 23) as DataCandidatura
      ,V.[Titulo]
	  ,E.[Tipo] as [TipoVaga]
	  ,L.[Cidade]
      ,C.[IDPerfil]
      ,P.[NomeCompleto] as Perfil
      ,TC.[TipoCandidatura] as [TipoCandidatura]
      ,C.[NomeCandidato]
      ,C.[ContactoCandidato]
      ,C.[EmailCandidato]
      ,C.[IDEstado]
      ,ES.[NomeAbrevi] as [Estado]
      ,P.[ImagemPath] as ImagemPath
FROM [BD22].[sc22_55].[Candidatura_Vaga] C
            INNER JOIN [BD22].[sc22_55].[Vaga] V ON V.[IDVaga] = C.[IDVaga]
			INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = V.[Localizacao]
			INNER JOIN [BD22].[sc22_55].[Experiencia] E ON E.[IDExperiencia] = V.[Experiencia]
            INNER JOIN [BD22].[sc22_55].[Estado] ES ON ES.[IDEstado] = C. [IDEstado]
            INNER JOIN [BD22].[sc22_55].[Perfil] P ON P.[IDPerfil] = C. [IDPerfil]
            INNER JOIN [BD22].[sc22_55].[TipoCandidatura] TC ON TC.[IDTipoCandidatura] = C. [TipoCandidatura]