UPDATE Colaborador
SET Palavrapasse = @Palavrapasse
WHERE ID IN (
    SELECT c.ID
    FROM Colaborador c
    INNER JOIN perfil p ON c.ID = p.IDPerfil
    WHERE p.Email = @Email
);

UPDATE Perfil
SET Estado = 2
WHERE Email =  @Email AND Estado !=0;