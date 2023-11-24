UPDATE [BD22].[sc22_55].[Negocio]
SET [IDEstado]= 7
WHERE [IDNegocio]=@negocioId

SELECT [IDNegocio]
      ,[IDEstado]
FROM [BD22].[sc22_55].[Negocio]
WHERE [IDNegocio]=@negocioId