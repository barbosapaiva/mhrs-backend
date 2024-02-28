SELECT IDBeneficio,
       Titulo,
       Desconto,
       Contacto1,
       Contacto2,
       C.NomeCategoria AS Categoria,
       Descricao,
       TO_CHAR(DataInicio, 'YYYY-MM-DD') AS DataInicio,
       ImagemPath,
       L.Cidade AS Localizacao,
       Email,
       URLPagina
FROM Beneficio B
    INNER JOIN CategoriaBeneficio C ON C.IDCategoria = B.Categoria
    INNER JOIN Localizacao L ON L.IDLocalizacao = B.Localizacao
WHERE IDBeneficio = $1;
