INSERT INTO [BD22].[sc22_55].[Negocio]
    (
        [IDCliente],
        [IDPerfil],
        [IDEstado],
        [DataSubmissao],
        [IDProjeto]
    )
VALUES 
    (
        @IDCliente,
        @IDPerfil,
        @IDEstado,
        @DataSubmissao,
        @IDProjeto
    )

SELECT SCOPE_IDENTITY() AS IDNegocio