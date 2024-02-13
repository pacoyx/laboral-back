const empleosRepo = require("../repositories/empleosRepository");
const mailService = require("./mailService");

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

  const objDatos = {    
    correo: body.correo,
    nombre: body.nombre,
    tituloPuesto: body.job_title
  };
  mailService.enviarCorreoRegEmpleo(objDatos);

  const respOk = {
    codigoRespuesta: "00",
    data: "empleo registrado",
  };

  return respOk;
};

exports.listarEmpleosOpenClose = async function (body) {
  const resp = await empleosRepo.listarEmpleosOpenClose(body);
  if (!resp.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: resp.error,
    };
    return resp;
  }
  const respOk = {
    codigoRespuesta: "00",
    hasData: resp.data.length > 0 ? true : false,
    data: resp.data,
  };
  return respOk;
};

exports.eliminarEmpleoPorId = async function (body) {
  var respDB = [];
  body.ids.forEach(async (element) => {
    const respLog = await empleosRepo.eliminarEmpleoPorId(element);
    respDB.push(respLog.estado);
    if (!respLog.estado) {
      console.log("[ERROR]", respLog.error);
    }
  });

  const respOk = {
    codigoRespuesta: "00",
    data: "empleo(s) elimiando(s)",
    respDB,
  };

  return respOk;
};
