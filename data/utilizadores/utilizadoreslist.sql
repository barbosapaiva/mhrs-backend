SELECT IDPerfil
      ,NomeCompleto
      ,PNome
      ,UNome
      ,Email
      ,Contacto
      ,Genero
      ,DataNascimento
      ,T.Perfil AS TipoPerfil
      ,Estado
      ,ImagemPath
      
  FROM BD22.sc22_55.Perfil P
    INNER JOIN BD22.sc22_55.Tipo_Perfil T ON T.IDTipo = P.TipoPerfil 