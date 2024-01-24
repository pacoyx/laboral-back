const empresaRepo = require("../repositories/empresaRepository");

exports.registrarEmpresa = async function (body) {
  const query = {
    correo: body.correo,
    nombreEmpresa: body.nombreEmpresa,
    ubicacion: body.ubicacion,
    url: body.url,
  };

  const respLog = await empresaRepo.registrarEmpresa(query);
  if (!respLog.estado) {
    console.log("[ERROR]", respLog.error);
    const resp = {
      codigoRespuesta: "99",
      error: "error interno",
    };
    return resp;
  }

  const respOk = {
    codigoRespuesta: "00",
    data: "empresa registrada",
  };

  return respOk;
};
