DECLARE @IDEstadocandidatura INT

set @IDEstadocandidatura = (SELECT IDEstado from Estado where NomeAbrevi = @Estado)



UPDATE [BD22].[sc22_55].[Candidatura_Vaga]
SET [IDEstado]=@IDEstadocandidatura
WHERE [IDCandidatura]=@candidaturaId

SELECT [IDCandidatura]
      ,[IDEstado]
FROM [BD22].[sc22_55].[Candidatura_Vaga]
WHERE [IDCandidatura]=@candidaturaId