SELECT [IDBeneficio],
       [Titulo],
      [Desconto],
      [Contacto1],
      [Contacto2],
      C.[NomeCategoria] AS [Categoria],
      [Descricao],
      convert(varchar(10), [DataInicio], 23) as DataInicio,
      [ImagemPath],
      L.[Cidade] AS [Localizacao],
      [Email],
      [URLPagina]
FROM [BD22].[sc22_55].[Beneficio] B
    INNER JOIN [BD22].[sc22_55].[CategoriaBeneficio] C ON C.[IDCategoria] = B.[Categoria]
    INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = B.[Localizacao]
WHERE [IDBeneficio]=@beneficioId