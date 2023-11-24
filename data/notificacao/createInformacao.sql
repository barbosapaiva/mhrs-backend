INSERT INTO BD22.sc22_55.Informacao
    (Titulo,
    Descricao,
    Data_Criacao,
    Estado,
    IDPerfil
    )

    VALUES
    (
        @Titulo,
        @Descricao, 
        @Data_Criacao, 
        @Estado, 
        @IDPerfil
    )
SELECT SCOPE_IDENTITY() AS IDInformacao