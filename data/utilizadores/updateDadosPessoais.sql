UPDATE [sc22_55].[Perfil]
   SET [NomeCompleto] = @NomeCompleto
      ,[PNome] = @PNome
      ,[UNome] = @UNome
      ,[Email] = @Email
      ,[Contacto] = @Contacto
      ,[Genero] = @Genero
      ,[Distrito] = @Distrito
      ,[DataNascimento] = @DataNascimento 
 WHERE IDPerfil = @IDPerfil

SELECT [IDPerfil],
        [PNome]
FROM [BD22].[sc22_55].[Perfil]
WHERE [IDPerfil]=@IDPerfil