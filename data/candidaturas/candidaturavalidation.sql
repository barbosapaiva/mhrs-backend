SELECT 
    CASE
        WHEN EXISTS (
            SELECT 1 
            FROM [BD22].[sc22_55].[Candidatura_Vaga] C
            WHERE C.[IDVaga] = @vagaId AND C.[IDPerfil] = @perfilId AND C.[TipoCandidatura] = 1
        ) THEN 1
        ELSE 0
    END AS [Result]
