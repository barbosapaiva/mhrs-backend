UPDATE [sc22_55].[Perfil]
   SET [DescricaoPessoal] = @DescricaoPessoal
      ,[HabilitacaoLiteratia] = @HabilitacaoLiteratia
      ,[AreaFormacao] = @AreaFormacao
 WHERE IDPerfil = @IDPerfil

SELECT [IDPerfil],
       [NomeFichCV]
FROM [BD22].[sc22_55].[Perfil]
WHERE [IDPerfil]=@IDPerfil