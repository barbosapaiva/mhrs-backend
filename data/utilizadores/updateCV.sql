UPDATE [sc22_55].[Perfil]
   SET [CV] = @CV
      ,[NomeFichCV] = @NomeFichCV
WHERE IDPerfil = @IDPerfil

SELECT [IDPerfil],
       [NomeFichCV]
FROM [BD22].[sc22_55].[Perfil]
WHERE [IDPerfil]=@IDPerfil
     