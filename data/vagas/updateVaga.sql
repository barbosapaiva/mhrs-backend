DECLARE @IDExp INT
DECLARE @IDcarreira INT
DECLARE @IDLocalizacao INT

set @IDExp = (SELECT idexperiencia from Experiencia where Tipo = @Experiencia)
set @IDcarreira = (SELECT IDCarreira from Carreira where Tipo = @CarreiraAssociada)
set @IDLocalizacao = (SELECT IDLocalizacao from Localizacao where Cidade = @Localizacao)

UPDATE [BD22].[sc22_55].[Vaga]
SET [Titulo]=@Titulo,
    [Descricao]=@Descricao,
    [Descricao_BeneficiosVaga]=@Descricao_BeneficiosVaga,
    [TipoVaga]=@TipoVaga,
    [DataAbertura]=@DataAbertura,
    [Experiencia]=@IDExp,
    [CarreiraAssociada]=@IDcarreira,
    [NumVagas]=@NumVagas,
    [Estado]=@Estado,
    [Localizacao]=@IDLocalizacao
WHERE [IDVaga]=@vagaId

SELECT [IDVaga]
      ,[Titulo]
      ,[Descricao]
      ,[Descricao_BeneficiosVaga]
      ,[TipoVaga]
      ,[DataAbertura]
      ,[Experiencia]
      ,[CarreiraAssociada]
      ,[NumVagas]
      ,[Estado]
      ,[Localizacao]
FROM [BD22].[sc22_55].[Vaga]
WHERE [IDVaga]=@vagaId