SELECT 
    name AS 'FunctionName',
    type_desc AS 'Type'
FROM 
    sys.objects
WHERE 
    type_desc = 'SQL_INLINE_TABLE_VALUED_FUNCTION'
    AND name = 'sc22_55.GetTotalVagasAtivasPorCarreira()'
    AND SCHEMA_NAME(schema_id) = 'sc22_55'
ORDER BY 
    name;
