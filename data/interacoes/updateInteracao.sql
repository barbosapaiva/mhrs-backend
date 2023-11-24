UPDATE [sc22_55].[Interacao]
   SET [Data_Interacao] =@Data_Interacao
      ,[Descricao] = @Descricao
      ,[Tipo_Interacao] = @Tipo_Interacao
      ,[Anexo] = @Anexo
      ,[Canal] = @Canal
      ,[Titulo] = @Titulo
 WHERE [IDInteracao] = @idinteracao

 
SELECT [IDInteracao]
      ,[Descricao]
FROM [BD22].[sc22_55].[Interacao]
WHERE [IDInteracao] = @idinteracao