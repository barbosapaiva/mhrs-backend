SELECT
    P.[IDPerfil],
    P.[NomeCompleto],
    P.[PNome],
    P.[UNome],
    P.[Email],
    P.[Contacto],
    G.[Genero] as Genero,
    L.[Cidade] as Cidade,
    convert(varchar(15), [DataNascimento], 23) as [DataNascimento],
    P.[DescricaoPessoal],
    H.[Tipo] as Habilitacao,
    A.[Area] as Area,
    TP.[Perfil] as TipoPerfil,
    P.[CV],
    P.[NomeFichCV],
    P.[Estado],
    P.[ImagemPath],
	C.[NColaborador],
	Ca.[Tipo] as Departamento,
	C.Funcao
FROM [BD22].[sc22_55].[Perfil] P
LEFT JOIN HabilitacaoLiter H ON H.IDHabilitacao = P.HabilitacaoLiteratia
LEFT JOIN AreaFormacao A ON A.IDArea = P.AreaFormacao
LEFT JOIN Tipo_Perfil TP ON TP.IDTipo = P.TipoPerfil
LEFT JOIN Genero G ON G.IDGenero = P.Genero
LEFT JOIN Localizacao L ON L.IDLocalizacao = P.Distrito
LEFT JOIN Colaborador C ON C.ID = P.IDPerfil
LEFT JOIN Carreira Ca ON Ca.IDCarreira = C.Departamento
WHERE P.[IDPerfil] = @utilizadorId;
