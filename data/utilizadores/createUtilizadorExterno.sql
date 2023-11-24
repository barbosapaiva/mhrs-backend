INSERT INTO [BD22].[sc22_55].[Perfil]
    (
        [NomeCompleto],
        [PNome],
        [UNome],
        [Email],
        [Contacto],
        [Genero],
        [DataNascimento],
        [TipoPerfil],
        [Estado]
    )
VALUES 
    (
        @PNome + ' ' + @UNome,
        @PNome,
        @UNome,
        @Email,
        @Contacto,
        @Genero,
        @DataNascimento,
        6,
        @Estado
    )
DECLARE @IDPerfil INT 
SELECT @IDPerfil=SCOPE_IDENTITY()

INSERT INTO [BD22].[sc22_55].[Autenticacao_User]
    (
        [ID],
        [Token]
    )
VALUES 
    (
        @IDPerfil,
        @Token
    )
SELECT @IDPerfil AS IDPerfil