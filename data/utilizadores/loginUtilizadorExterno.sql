SELECT TOP 1 [IDPerfil],[NomeCompleto], [Email], [Perfil],  P.[ImagemPath], [Estado], P.[PNome]
FROM [BD22].[sc22_55].[Perfil] P
    INNER JOIN [BD22].[sc22_55].[Autenticacao_User] A ON P.[IDPerfil] = A.[ID]
    INNER JOIN [BD22].[sc22_55].[Tipo_Perfil] T ON T.[IDTipo] = P.[TipoPerfil] 
WHERE P.[Email] = @Email