INSERT INTO [BD22].[sc22_55].[Entrevista]
    (
        [Assunto],
        [Descricao],
        [TipoLocal],
        [LocalEntrevista],
        [DataEntrev],
        [HoraEntrev],
        [Notas],
        [DocumentoPath],
        [IDEntrevistador],
        [IDCandidatura]
    )
VALUES 
    (
        @Assunto,
        @Descricao,
        @TipoLocal,
        @LocalEntrevista,
        @DataEntrev,
        @HoraEntrev,
        @Notas,
        @DocumentoPath,
        @IDEntrevistador,
        @IDCandidatura
    )

SELECT SCOPE_IDENTITY() AS IDEntrevista