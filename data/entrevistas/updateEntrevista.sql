UPDATE [BD22].[sc22_55].[Entrevista]
SET [Assunto]=@Assunto,
    [Descricao]=@Descricao,
    [TipoLocal]=@TipoLocal,
    [LocalEntrevista]=@LocalEntrevista,
    [DataEntrev]=@DataEntrev,
    [HoraEntrev]=@HoraEntrev,
    [Notas]=@Notas,
    [DocumentoPath]=@DocumentoPath,
    [IDEntrevistador]=@IDEntrevistador,
    [IDPontuacao]=@IDPontuacao,
    [IDCandidatura]=@IDCandidatura
WHERE [IDEntrevista]=@entrevistaId