SELECT
    [IDPerfil],
    [IDReuniao]

FROM [BD22].[sc22_55].[Participantes] Part
WHERE [IDPerfil]=@perfilId AND [IDReuniao]=@reuniaoId