DECLARE @IDLocalizacao INT

set @IDLocalizacao = (SELECT IDLocalizacao from Localizacao where Cidade = @Localidade)

UPDATE [BD22].[sc22_55].[Cliente]
SET [NomeCliente]=@NomeCliente,
    [Email]=@Email,
    [Endereco]=@Endereco,
    [Localidade]=@IDLocalizacao,
    [Contacto1]=@Contacto1,
    [Contacto2]=@Contacto2,
    [Contacto2]=@Contacto3,
    [NIFEmpresa]=@NIFEmpresa
WHERE [IDCliente]=@clienteId

SELECT [IDCliente]
      ,[NomeCliente]
      ,[Email]
      ,[Endereco]
      ,[Localidade]
      ,[Contacto1]
      ,[Contacto2]
      ,[Contacto3]
      ,[NIFEmpresa]
FROM [BD22].[sc22_55].[Cliente]
WHERE [IDCliente]=@clienteId