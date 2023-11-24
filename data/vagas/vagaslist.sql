SELECT IDVaga,
       Titulo,
       V.Descricao,
       Descricao_BeneficiosVaga,
       TipoVaga,
       convert(varchar(10), [DataAbertura], 23) as DataAbertura,
       NumVagas, 
       P.NomeCompleto AS Autor,
       L.Cidade AS Localizacao,
       C.Tipo AS CarreiraAssociada,
       E.Tipo AS Experiencia,
       V.Estado AS Estado
FROM Vaga V
    INNER JOIN Perfil P ON V.IDAutor = p.IDPerfil
    INNER JOIN Experiencia E ON E.IDExperiencia = V.Experiencia
    INNER JOIN Carreira C ON C.IDCarreira = V.CarreiraAssociada
    INNER JOIN Localizacao L ON L.IDLocalizacao = V.Localizacao