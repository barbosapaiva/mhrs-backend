INSERT INTO [BD22].[sc22_55].[Reuniao]
    (
        [Assunto],
        [Descricao],
        [DataReuniao],
        [HoraReuniao],
        [TipoLocal],
        [LocalReuniao],
        [IDPerfil],
        [IDNegocio],
        [DocumentoPath],
        [Notas],
        [Estado]
    )
VALUES 
    (
        @Assunto,
        @Descricao,
        @DataReuniao,
        @HoraReuniao,
        @TipoLocal,
        @LocalReuniao,
        @IDPerfil,
        @IDNegocio,
        @DocumentoPath,
        @Notas,
        @Estado
    )

SELECT SCOPE_IDENTITY() AS IDReuniao