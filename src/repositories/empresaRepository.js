const auroraPool = require("../config/db/auroraConnection");

exports.registrarEmpresa = async function (query) {
  try {
    const SP_PARAMETERS = [
      "", //ruc
      query.nombreEmpresa,
      "", //icon
      "", //rating
      query.ubicacion,
      "", //linkedin
      query.url,
      "", //endorse
      "", //about
    ];
    const SP_QUERY = "CALL sp_i_company(?,?,?,?,?,?,?,?,?);";
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
