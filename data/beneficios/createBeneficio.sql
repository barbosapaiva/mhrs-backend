INSERT INTO [BD22].[sc22_55].[Beneficio]
    (
        [Titulo],
        [Desconto],
        [Contacto1],
        [Contacto2],
        [Categoria],
        [Descricao],
        [DataInicio],
        [ImagemPath],
        [Localizacao],
        [Email],
        [URLPagina]
    )
VALUES 
    (
        @Titulo,
        @Desconto,
        @Contacto1,
        @Contacto2,
        @Categoria,
        @Descricao,
        @DataInicio,
        @ImagemPath,
        @Localizacao,
        @Email,
        @URLPagina
    )

SELECT SCOPE_IDENTITY() AS IDBeneficio