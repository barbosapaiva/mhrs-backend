INSERT INTO [BD22].[sc22_55].[Projeto]
    (
        [NomeProjeto],
        [AreaProjeto],
        [IDCliente],
        [Descricao],
        [TipoProjeto]
    )
VALUES 
    (
        @NomeProjeto,
        @AreaProjeto,
        @IDCliente,
        @Descricao,
        @TipoProjeto
    )

SELECT SCOPE_IDENTITY() AS IDProjeto