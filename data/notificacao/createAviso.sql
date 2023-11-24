DECLARE @Titulo1 Varchar(150)
DECLARE @Descricao1 Varchar(Max)

set @Titulo1 = (SELECT Assunto from Reuniao where IDreuniao = @reuniaoId)
set @Descricao1 = (SELECT Descricao from Reuniao where IDreuniao = @reuniaoId)



INSERT INTO BD22.sc22_55.Aviso
           (Titulo
           ,Descricao
           ,IDPerfil)
     VALUES
           ( 'Falta menos de 30 minutos para a reunião: ' + @Titulo1,
            @Descricao1, 
            @IDPerfil
            )
SELECT SCOPE_IDENTITY() AS IDAviso