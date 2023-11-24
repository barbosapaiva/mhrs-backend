DECLARE @IDEstadoNegocio INT

set @IDEstadoNegocio = (SELECT IDEstado from Estado where NomeAbrevi = @IDEstado)

UPDATE [BD22].[sc22_55].[Negocio]
SET [IDEstado]=@IDEstadoNegocio
WHERE [IDNegocio]=@negocioId

SELECT [IDNegocio]
      ,[IDEstado]
FROM [BD22].[sc22_55].[Negocio]
WHERE [IDNegocio]=@negocioId