DECLARE @IDEstadoIdeia INT

set @IDEstadoIdeia = (SELECT IDEstado from Estado where NomeAbrevi = @IDEstado)


UPDATE [BD22].[sc22_55].[Ideia]
SET [IDEstado]=@IDEstadoIdeia
WHERE [IDIdeia]=@ideiaId

SELECT [IDIdeia]
      ,[IDEstado]
FROM [BD22].[sc22_55].[Ideia]
WHERE [IDIdeia]=@ideiaId