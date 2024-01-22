const auroraPool = require("../config/db/auroraConnection");
exports.login = async function (query) {
    try {
      const SP_PARAMETERS = [query.correo,query.clave];
      const SP_QUERY = "CALL SP_S_LOGIN(?,?);";
      const [affectedRows] = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
      if (affectedRows.length > 0) {
        return {
          estado: true,
          data: affectedRows,
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

  
exports.registrarUsuario = async function (query) {
    try {
      const SP_PARAMETERS = [
        query.correo,
        query.clave,
        query.nombreCompleto,
        query.nombreEmpresa,
        query.celular,
        query.estado,
      ];
      const SP_QUERY = "CALL SP_I_USUARIO(?,?,?,?,?,?);";
      const respdb = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
      console.log('affectedRows==>',respdb);
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

  
exports.validarRegistroUsuario = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.correo,
      query.clave      
    ];

    const SP_QUERY = "CALL SP_S_VALIDAR_REG_USU(?,?);";
    const [affectedRows] = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);    
    if (affectedRows.length > 0) {
      return {
        estado: true,
        data: affectedRows,
      };
    } else {
      return {
        estado: false,
        data: [],
      };   }

  } catch (error) {
    console.error(error);
    return {
      estado: false,
      error: error,
    };
  }
};


 
exports.actualizarEstadoUsuario = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.correo      
    ];
    const SP_QUERY = "CALL SP_U_ESTADO_USUARIO(?);";
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