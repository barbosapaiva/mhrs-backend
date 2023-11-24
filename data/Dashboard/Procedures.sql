-- Consulta para obter informações sobre um procedimento armazenado específico
SELECT 
    name AS 'ProcedureName',
    type_desc AS 'Type'
FROM 
    sys.procedures
WHERE 
    name = 'CandidaturasPorAreaUltimoMes'
    AND is_ms_shipped = 0
ORDER BY 
    name;
