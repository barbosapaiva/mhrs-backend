UPDATE [sc22_55].[Perfil]
   SET [ImagemPath] = @ImagemPath
WHERE IDPerfil = @IDPerfil

SELECT [IDPerfil],
       [ImagemPath]
FROM [BD22].[sc22_55].[Perfil]
WHERE [IDPerfil]=@IDPerfil