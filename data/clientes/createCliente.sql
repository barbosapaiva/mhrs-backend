INSERT INTO [BD22].[sc22_55].[Cliente]
    (
        [NomeCliente],
        [Email],
        [Endereco],
        [Localidade],
        [Contacto1],
        [Contacto2],
        [Contacto3],
        [NIFEmpresa]
    )
VALUES 
    (
        @NomeCliente,
        @Email,
        @Endereco,
        @Localidade,
        @Contacto1,
        @Contacto2,
        @Contacto3,
        @NIFEmpresa
    )

SELECT SCOPE_IDENTITY() AS IDCliente