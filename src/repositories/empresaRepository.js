const auroraPool = require("../config/db/auroraConnection");
 
exports.registrarEmpresa = async function (query) {
    try {
      const SP_PARAMETERS = [
        query.idusuario,                
        query.nombreEmpresa,
        query.ubicacion,
        query.url,
      ];
      const SP_QUERY = "CALL SP_I_EMPRESA_INFO(?,?,?,?);";
      const respdb = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);      
      if (respdb.affectedRows > 0) {
        return {
          estado: true,
          data: [],
        };
      } else {
        return {
          estado: false,
          data: [],
        };
      }
    } catch (error) {
      console.error(error);
      return {
        estado: false,
        error: error,
      };
    }
};