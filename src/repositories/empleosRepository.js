const auroraPool = require("../config/db/auroraConnection");

exports.listarEmpleosPorIdUsuario = async function (query) {
  try {
    const SP_PARAMETERS = [query.idUser];
    const SP_QUERY = "CALL sp_s_job_description(?);";
    const [affectedRows] = await auroraPool.queryAsync(SP_QUERY, SP_PARAMETERS);
    return {
      estado: true,
      data: affectedRows,
    };
  } catch (error) {
    console.error(error);
    return {
      estado: false,
      error: error,
    };
  }
};

exports.registrarEmpleo = async function (query) {
  try {
    const SP_PARAMETERS = [
      query.job_title,
      query.job_offer_link,
      query.company,
      query.req_qualifications,
      query.pref_qualifications,
      query.key_responsabilities,
      query.techskill_tool,
      query.language,
      query.knowledge,
      query.softskills,
      query.career_background,
      query.location,
      query.salary,
      query.date_entry,
      query.date_expiration,
      query.number_positions,
      query.status,
      query.nps,
      query.id_recruiter,
    ];
    const SP_QUERY =
      "CALL sp_i_job_description(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
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
