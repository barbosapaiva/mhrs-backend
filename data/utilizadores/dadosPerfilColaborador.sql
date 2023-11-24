SELECT IDPerfil, NomeCompleto, PNome, Email, Contacto, Genero, Cidade, Tipo, Area, NColaborador, Funcao, Departamento, Perfil, CV, NomeFichCV
FROM BD22.sc22_55.Perfil P
    INNER JOIN BD22.sc22_55.Colaborador C ON P.IDPerfil = C.ID
	INNER JOIN BD22.sc22_55.Localizacao L ON P.Distrito  = L.IDLocalizacao
    INNER JOIN BD22.sc22_55.HabilitacaoLiter H ON P.HabilitacaoLiteratia  = H.IDHabilitacao
    INNER JOIN BD22.sc22_55.AreaFormacao A ON P.AreaFormacao  = A.IDArea
    INNER JOIN BD22.sc22_55.Tipo_Perfil T ON T.IDTipo = P.TipoPerfil 
WHERE P.IDPerfil = @IDPerfil
