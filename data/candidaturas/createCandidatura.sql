INSERT INTO BD22.sc22_55.Candidatura_Vaga
    (CV,
    NomeFichCV, 
    CartaMotivacao, 
    DataCandidatura, 
    IDVaga, 
    IDPerfil, 
    TipoCandidatura,
    NomeCandidato, 
    ContactoCandidato, 
    EmailCandidato,
    IDEstado
    )
    VALUES
    (   @CV, 
        @NomeFichCV, 
        @CartaMotivacao, 
        @DataCandidatura,
        @IDVaga, 
        @IDPerfil, 
        @TipoCandidatura, 
        @NomeCandidato, 
        @ContactoCandidato,
        @EmailCandidato, 
        1
    )
SELECT SCOPE_IDENTITY() AS IDCandidatura