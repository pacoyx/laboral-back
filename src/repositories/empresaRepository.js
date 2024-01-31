const auroraPool = require("../config/db/auroraConnection");

exports.registrarEmpresa = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.ruc, //ruc
      query.name,
      query.icon, //icon
      query.rating, //rating
      query.location,
      query.linkedin, //linkedin
      query.webpage,
      query.endorse, //endorse
      query.about, //about
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
