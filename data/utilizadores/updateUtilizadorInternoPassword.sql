UPDATE Colaborador
SET Palavrapasse = @NovaPalavrapasse
WHERE ID IN (SELECT c.ID FROM Colaborador c JOIN Perfil p ON c.ID = p.IDPerfil WHERE p.Email = @Email AND c.Palavrapasse = @Palavrapasse);

UPDATE Perfil
SET Estado = 1
WHERE IDPerfil IN (SELECT IDPerfil FROM Perfil P
    INNER JOIN Colaborador C ON P.IDPerfil = C.ID
    INNER JOIN Tipo_Perfil T ON T.IDTipo = P.TipoPerfil
WHERE P.Email = @Email AND C.Palavrapasse = @NovaPalavrapasse AND P.Estado != 0)

SELECT TOP 1 [IDPerfil]
FROM [BD22].[sc22_55].[Perfil] P
    INNER JOIN [BD22].[sc22_55].[Colaborador] C ON P.[IDPerfil] = C.[ID]
    INNER JOIN [BD22].[sc22_55].[Tipo_Perfil] T ON T.[IDTipo] = P.[TipoPerfil] 
WHERE P.[Email] = @Email AND C.[Palavrapasse] = @NovaPalavrapasse