DECLARE @Categoria varchar
DECLARE @IDLocalizacao INT

set @IDCategoria = (SELECT IDCategoria from CategoriaBeneficio where NomeCategoria = @Categoria)
set @IDLocalizacao = (SELECT IDLocalizacao from Localizacao where Cidade = @Localizacao)

UPDATE [BD22].[sc22_55].[Beneficio]
SET [Titulo]=@Titulo,
    [Desconto]=@Desconto,
    [Contacto1]=@Contacto1,
    [Contacto2]=@Contacto2,
    [Categoria]=@IDCategoria,
    [Descricao]=@Descricao,
    [DataInicio]=@DataInicio,
    [ImagemPath]=@ImagemPath,
    [Email]=@Email,
    [Localizacao]=@IDLocalizacao,
    [URLPagina]=@URLPagina
WHERE [IDBeneficio]=@beneficioId

SELECT [IDBeneficio]
        ,[Titulo]
        ,[Desconto]
        ,[Contacto1]
        ,[Contacto2]
        ,[Categoria]
        ,[Descricao]
        ,[DataInicio]
        ,[ImagemPath]
        ,[Localizacao]
        ,[Email]
        ,[URLPagina]
FROM [BD22].[sc22_55].[Beneficio]
WHERE [IDBeneficio]=@beneficioId