INSERT INTO [sc22_55].[Interacao]
    (
            [IDCliente]
           ,[IDPerfil]
           ,[IDNegocio]
           ,[Data_Interacao]
           ,[Descricao]
           ,[Tipo_Interacao]
           ,[Anexo]
           ,[Canal]
           ,[Titulo]
     )
VALUES
     (
           @IDCliente
           ,@IDPerfil
           ,@IDNegocio
           ,@Data_Interacao
           ,@Descricao
           ,@Tipo_Interacao
           ,@Anexo
           ,@Canal
           ,@Titulo
      )

SELECT SCOPE_IDENTITY() AS IDInteracao