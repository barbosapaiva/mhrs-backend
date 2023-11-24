SELECT  [IDEntrevista],
        [Assunto],
        E.[Descricao],
        [TipoLocal],
        [LocalEntrevista],
        convert(varchar(10), [DataEntrev], 23) as DataEntrev,
        convert(varchar(5), E.[HoraEntrev], 108) as [HoraEntrev],
        [Notas],
        [DocumentoPath],
        [IDEntrevistador],
        P.NomeCompleto as NomeEntrevistador,
        E.[IDPontuacao],
        Pont.ValorPercentual as ValorPercentual,
        Pont.Comentario as ComentarioPont,
        E.[IDCandidatura],
        V.Titulo as TituloVaga,
		Perf.NomeCompleto as NomeEntrevistado,        
        P.ImagemPath as ImagemPathEntrevistador,
        Perf.ImagemPath as ImagemPathEntrevistado
FROM [BD22].[sc22_55].[Entrevista] E
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON E.[IDEntrevistador] = p.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Pontuacao] Pont ON E.[IDPontuacao] = Pont.[IDPontuacao]
    INNER JOIN [BD22].[sc22_55].[Candidatura_Vaga] C ON E.[IDCandidatura] = C.[IDCandidatura]
    INNER JOIN [BD22].[sc22_55].[Vaga] V ON C.[IDVaga] = V.[IDVaga]
	INNER JOIN [BD22].[sc22_55].[Perfil] Perf ON C.[IDPerfil] = Perf.[IDPerfil]