UPDATE Colaborador
SET Palavrapasse = @NovaPalavrapasse
WHERE ID = @IDPerfil;



SELECT TOP 1 [IDPerfil],
  C.Palavrapasse
FROM [BD22].[sc22_55].[Perfil] P
    INNER JOIN [BD22].[sc22_55].[Colaborador] C ON P.[IDPerfil] = C.[ID]
    INNER JOIN [BD22].[sc22_55].[Tipo_Perfil] T ON T.[IDTipo] = P.[TipoPerfil] 
WHERE [ID]=@IDPerfil