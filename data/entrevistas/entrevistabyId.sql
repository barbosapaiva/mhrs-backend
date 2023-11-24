SELECT  [IDEntrevista],
        [Assunto],
        E.[Descricao],
        [TipoLocal],
        [LocalEntrevista],
        convert(varchar(10), E.[DataEntrev], 23) as DataEntrev,
        convert(varchar(5), E.[HoraEntrev], 108) as [HoraEntrev],
        [Notas],
        [DocumentoPath],
        [IDEntrevistador],
        P.NomeCompleto as NomeEntrevistador,
        E.[IDPontuacao],
        Pont.ValorPercentual as ValorPercentual,
        Pont.Comentario as ComentarioPont,
        E.[IDCandidatura],
        convert(varchar(10),  C.[DataCandidatura], 23) as DataCandidatura,
        TC.[TipoCandidatura],
        Est.[NomeAbrevi],
        V.Titulo as TituloVaga,
		Perf.NomeCompleto as NomeEntrevistado,
        Perf.Email as Email,
        Perf.Contacto as Contacto,
        P.ImagemPath as ImagemPathEntrevistador,
        Perf.ImagemPath as ImagemPathEntrevistado,
        Perf.NomeFichCV as NomeFichCVPerfil,
        Perf.IDPerfil as IDPerfilEntrevistado,
        Perf.[PNome]
FROM [BD22].[sc22_55].[Entrevista] E
    INNER JOIN [BD22].[sc22_55].[Perfil] P ON E.[IDEntrevistador] = p.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Pontuacao] Pont ON E.[IDPontuacao] = Pont.[IDPontuacao]
    INNER JOIN [BD22].[sc22_55].[Candidatura_Vaga] C ON E.[IDCandidatura] = C.[IDCandidatura]
    INNER JOIN [BD22].[sc22_55].[Vaga] V ON C.[IDVaga] = V.[IDVaga]
	INNER JOIN [BD22].[sc22_55].[Perfil] Perf ON C.[IDPerfil] = Perf.[IDPerfil]
    INNER JOIN [BD22].[sc22_55].[Estado] Est ON C.[IDEstado] = Est.[IDEstado]
    INNER JOIN [BD22].[sc22_55].[TipoCandidatura] TC ON C.[TipoCandidatura] = TC.[IDTipoCandidatura]
WHERE [IDEntrevista]=@entrevistaId