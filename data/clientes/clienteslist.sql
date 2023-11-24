SELECT IDCliente,
       NomeCliente,
       C.Email,
       Endereco,
       L.Cidade AS Localidade,
       Contacto1,
       Contacto2,
       Contacto3,
       NIFEmpresa
FROM Cliente C
    INNER JOIN Localizacao L ON L.IDLocalizacao = C.Localidade