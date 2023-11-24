DECLARE @IDcarreira INT
DECLARE @IDTipoProjeto INT

set @IDcarreira = (SELECT IDCarreira from Carreira where Tipo = @AreaProjeto)
set @IDTipoProjeto = (SELECT IDTipoProjeto from TipoProjeto where TipoProjeto = @TipoProjeto)

UPDATE [BD22].[sc22_55].[Projeto]
SET [NomeProjeto]=@NomeProjeto,
    [AreaProjeto]=@IDcarreira,
    [Descricao]=@Descricao,
    [TipoProjeto]=@IDTipoProjeto
WHERE [IDProjeto]=@projetoId

SELECT [IDProjeto]
      ,[NomeProjeto]
      ,[AreaProjeto]
      ,[Descricao]
      ,[TipoProjeto]
FROM [BD22].[sc22_55].[Projeto]
WHERE [IDProjeto]=@projetoId