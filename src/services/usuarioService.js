const usuarioRepo = require("../repositories/usuarioRepository");
exports.login = async function (body) {    
    const respLog = await usuarioRepo.login(body);
    if (!respLog.estado) {
      const resp = {
        codigoRespuesta: "99",
        error: respLog.error,
      };
      return resp;
    }
  
    const respOk = {
      codigoRespuesta: "00",
      data: respLog.data,
    };
  
    return respOk;
  };


  
exports.registrarUsuario = async function (body) {
    const query = {
        correo:body.correo,
        clave:body.clave,
        nombreCompleto:body.nombreCompleto,
        nombreEmpresa:body.nombreEmpresa,
        celular:body.celular,
        estado:body.estado,
    };
    const respLog = await usuarioRepo.registrarUsuario(query);
    if (!respLog.estado) {
      const resp = {
        codigoRespuesta: "99",
        error: respLog.error,
      };
      return resp;
    }
  
    const respOk = {
      codigoRespuesta: "00",
      data: 'log registrado',
    };
  
    return respOk;
  };