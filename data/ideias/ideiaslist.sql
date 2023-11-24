SELECT I.IDIdeia,
      I.Titulo,
      A.NomeArea as AreaIdeia,
      I.Descricao,
      convert(varchar(10), [DataSubmetida], 23) as DataSubmetida,
      L.Cidade as LocalEmpresa,
      P.NomeCompleto as IDPerfil,
      I.[IDPerfil] as IDPerf,
      E.NomeAbrevi as IDEstado
FROM Ideia I 
  INNER JOIN Perfil P ON I.IDPerfil = p.IDPerfil
  INNER JOIN AreaIdeia A ON A.IDArea = I.AreaIdeia
  INNER JOIN Localizacao L ON L.IDLocalizacao = I.LocalEmpresa
  INNER JOIN Estado E ON E.IDEstado = I.IDEstado