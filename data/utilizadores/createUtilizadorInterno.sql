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
        5,
        @Estado
    )
DECLARE @IDPerfil INT 
SELECT @IDPerfil=SCOPE_IDENTITY()

INSERT INTO [BD22].[sc22_55].[Colaborador]
    (
        [NColaborador],
        [Palavrapasse],
        [Funcao],
        [ID]
    )
VALUES 
    (
        @NColaborador,
        @Palavrapasse,
        @Funcao,
        @IDPerfil
    )
SELECT @IDPerfil AS IDPerfil