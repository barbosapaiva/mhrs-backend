SELECT [IDCliente],
       [NomeCliente],
       C.[Email],
       [Endereco],
       L.[Cidade] AS [Localidade],
       [Contacto1],
       [Contacto2],
       [Contacto3],
       [NIFEmpresa]
FROM [BD22].[sc22_55].[Cliente] C
    INNER JOIN [BD22].[sc22_55].[Localizacao] L ON L.[IDLocalizacao] = C.[Localidade]
WHERE [IDCliente]=@clienteId