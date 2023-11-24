SELECT IDPerfil
	  ,[NomeCompleto]
      ,[PNome]
      ,[UNome]
      ,[Email]
      ,[Contacto]
      ,[Genero]
      ,[Distrito]
      ,Convert(varchar, [DataNascimento], 105) AS [DataNascimento]
      ,[DescricaoPessoal]
      ,[HabilitacaoLiteratia]
      ,[AreaFormacao]
      ,[CV]
      ,[NomeFichCV]
      ,[ImagemPath]
FROM BD22.sc22_55.Perfil 
WHERE IDPerfil = @IDPerfil