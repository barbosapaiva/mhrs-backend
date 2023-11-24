INSERT INTO [BD22].[sc22_55].[Vaga]
    (
        [IDAutor],
        [Titulo],
        [Descricao],
        [Descricao_BeneficiosVaga],
        [TipoVaga],
        [DataAbertura],
        [Experiencia],
        [CarreiraAssociada],
        [NumVagas],
        [Estado],
        [Localizacao]
    )
VALUES 
    (
        @IDAutor,
        @Titulo,
        @Descricao,
        @Descricao_BeneficiosVaga,
        @TipoVaga,
        @DataAbertura,
        @Experiencia,
        @CarreiraAssociada,
        @NumVagas,
        @Estado,
        @Localizacao
    )

SELECT SCOPE_IDENTITY() AS IDVaga