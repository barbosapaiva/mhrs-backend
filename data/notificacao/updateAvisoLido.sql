UPDATE [sc22_55].[Aviso]
   SET [Lido] = 1
 WHERE IDPerfil = @IDPerfil
  
SELECT [IDAviso]
      ,[Lido]
FROM [BD22].[sc22_55].[Aviso]
WHERE [IDPerfil]=@IDPerfil