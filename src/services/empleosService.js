const empleosRepo = require("../repositories/empleosRepository");

exports.listarEmpleosPorIdUser = async function (body) {
  const respLog = await empleosRepo.listarEmpleosPorIdUsuario(body);
  if (!respLog.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: respLog.error,
    };
    return resp;
  }
  const respOk = {
    codigoRespuesta: "00",
    hasData: respLog.data.length > 0 ? true : false,
    data: respLog.data,
  };
  return respOk;
};

exports.registrarEmpleo = async function (body) {
  const respLog = await empleosRepo.registrarEmpleo(body);
  if (!respLog.estado) {
    console.log("[ERROR 1]", respLog.error);
    const resp = {
      codigoRespuesta: "99",
      error: "error interno",
    };
    return resp;
  }

  const respLog2 = await empleosRepo.registrarEmpleob2c(body);
  if (!respLog2.estado) {
    console.log("[ERROR 2]", respLog2.error);
    const resp = {
      codigoRespuesta: "99",
      error: "error interno",
    };
    return resp;
  }

  const respOk = {
    codigoRespuesta: "00",
    data: "empleo registrado",
  };

  return respOk;
};
