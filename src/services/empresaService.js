const empresaRepo = require("../repositories/empresaRepository");

exports.registrarEmpresa = async function (body) {
  const query = {
    ruc: body.ruc,
    name: body.name,
    icon: body.icon,
    rating: body.rating,
    location: body.location,
    linkedin: body.linkedin,
    webpage: body.webpage,
    endorse: body.endorse,
    about: body.about,
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
