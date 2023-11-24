INSERT INTO [BD22].[sc22_55].[Ideia]
    (
        [Titulo],
        [AreaIdeia],
        [Descricao],
        [DataSubmetida],
        [LocalEmpresa],
        [IDPerfil],
        [IDEstado]
    )
VALUES 
    (
        @Titulo,
        @AreaIdeia,
        @Descricao,
        @DataSubmetida,
        @LocalEmpresa,
        @IDPerfil,
        @IDEstado
    )

SELECT SCOPE_IDENTITY() AS IDIdeia