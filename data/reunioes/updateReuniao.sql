UPDATE [BD22].[sc22_55].[Reuniao]
SET [Assunto]=@Assunto,
    [Descricao]=@Descricao,
    [DataReuniao]=@DataReuniao,
    [HoraReuniao]=@HoraReuniao,
    [TipoLocal]=@TipoLocal,
    [LocalReuniao]=@LocalReuniao,
    [DocumentoPath]=@DocumentoPath,
    [Notas]=@Notas,
    [Estado]=@Estado
WHERE [IDReuniao]=@reuniaoId

SELECT [IDReuniao]
      ,[Assunto]
      ,[Descricao]
      ,[DataReuniao]
      ,[HoraReuniao]
      ,[TipoLocal]
      ,[LocalReuniao]
      ,[DocumentoPath]
      ,[Notas]
      ,[Estado]
FROM [BD22].[sc22_55].[Reuniao]
WHERE [IDReuniao]=@reuniaoId