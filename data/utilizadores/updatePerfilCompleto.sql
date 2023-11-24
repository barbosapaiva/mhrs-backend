DECLARE @IDHab INT
DECLARE @IDArea INT
DECLARE @IDLocalizacao INT
DECLARE @IDDepartamento INT

set @IDHab = (SELECT [IDHabilitacao] from [HabilitacaoLiter] where [Tipo] = @HabilitacaoLiteratia)
set @IDArea = (SELECT [IDArea] from [AreaFormacao] where [Area] = @AreaFormacao)
set @IDLocalizacao = (SELECT IDLocalizacao from Localizacao where Cidade = @Distrito)
set @IDDepartamento = (SELECT IDCarreira from Carreira where Tipo = @Departamento)


UPDATE [sc22_55].[Perfil]
SET [NomeCompleto] = @NomeCompleto,
    [PNome] = @PNome,
    [UNome] = @UNome,
    [Contacto] = @Contacto,
    [Distrito] = @IDLocalizacao,
    [DataNascimento] = @DataNascimento,
    [DescricaoPessoal] = @DescricaoPessoal,
    [HabilitacaoLiteratia] = @IDHab,
    [AreaFormacao] = @IDArea,
    [CV] = @CV,
    [NomeFichCV] = @NomeFichCV,
    [ImagemPath] = @ImagemPath
WHERE IDPerfil = @IDPerfil;

UPDATE [sc22_55].[Colaborador]
SET [Funcao] = @Funcao,
    [Departamento] = @IDDepartamento
WHERE ID = @IDPerfil;

SELECT [IDPerfil],
       [PNome]
FROM [BD22].[sc22_55].[Perfil]
WHERE [IDPerfil]=@IDPerfil
