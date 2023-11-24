SELECT TOP 1 [IDPerfil],[NomeCompleto], [NColaborador], [Email], [Perfil], P.[ImagemPath], [Estado], P.[PNome]
FROM [BD22].[sc22_55].[Perfil] P
    INNER JOIN [BD22].[sc22_55].[Colaborador] C ON P.[IDPerfil] = C.[ID]
    INNER JOIN [BD22].[sc22_55].[Tipo_Perfil] T ON T.[IDTipo] = P.[TipoPerfil] 
WHERE P.[Email] = @Email AND C.[Palavrapasse] = @Palavrapasse
