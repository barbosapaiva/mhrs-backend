      INSERT INTO [BD22].[sc22_55].[Reuniao]
      ([Assunto], [Descricao], [DataReuniao], [HoraReuniao], [TipoLocal], [LocalReuniao], [IDCliente], [IDPerfil], [IDNegocio], [Notas])
      VALUES
      (@Assunto, @Descricao, @DataReuniao, @HoraReuniao, @TipoLocal, @LocalReuniao, @IDCliente, @IDPerfil, @IDNegocio, @Notas);