const usuarioRepo = require("../repositories/usuarioRepository");
const tokenService = require("./tokenService");
const encriptador = require("../utils/encript");
const mailService = require("./mailService");

exports.login = async function (body) {
  const respLog = await usuarioRepo.login(body);
  if (!respLog.estado) {
    const resp = {
      codigoRespuesta: "99",
      error: respLog.error,
    };
    return resp;
  }

  const token = tokenService.GenerarToken(body.correo);
  const respOk = {
    codigoRespuesta: "00",
    data: respLog.data[0],
    token,
  };

  return respOk;
};

exports.registrarUsuario = async function (body) {
  const query = {
    correo: body.correo,
    clave: body.clave,
    nombreCompleto: body.nombreCompleto,
    nombreEmpresa: body.nombreEmpresa,
    celular: body.celular,
    estado: body.estado,
  };

  const respLog = await usuarioRepo.registrarUsuario(query);
  if (!respLog.estado) {
    console.log("[ERROR]", respLog.error);
    const resp = {
      codigoRespuesta: "99",
      error: "error interno",
    };
    return resp;
  }

  const objEncriptar = { correo: body.correo, clave: body.clave };
  const dataEncriptada = encriptador.encrypt(JSON.stringify(objEncriptar));
  console.log('data encriptada****', dataEncriptada);
  const token = dataEncriptada.iv + "|" + dataEncriptada.encryptedData;
  const url = process.env.url_validate_register + token;
  
  var dataDesEncriptada = encriptador.decrypt(dataEncriptada);
  console.log('dataDesEncriptada==>',dataDesEncriptada);


  mailService.enviarCorreo(url);

  const respOk = {
    codigoRespuesta: "00",
    data: "usuario registrado",
  };

  return respOk;
};

exports.validaRegistroUsuario = async function (body) {

  try {
    var dataDesEncriptada = encriptador.decrypt(body);  
    dataDesEncriptada = JSON.parse(dataDesEncriptada);  
  } catch (error) {
    const resp = {
      codigoRespuesta: "99",
      validacion: "error",
      error: "error interno encript",
    };
    return resp;
  }
  


  const respLog = await usuarioRepo.validarRegistroUsuario(dataDesEncriptada);
  if (!respLog.estado) {
    console.log('[ERROR]',respLog.error);
    const resp = {
      codigoRespuesta: "99",
      validacion: "error",
      error: "error al validar usuario",
    };
    return resp;
  }

  const respAct = await usuarioRepo.actualizarEstadoUsuario(dataDesEncriptada);
  if(!respAct.estado){
    const resp = {
      codigoRespuesta: "99",
      validacion: "error",
      error: "ocurrio un error al actualizar el estado del usuario",
    };
    return resp;
  }

  const respOk = {
    codigoRespuesta: "00",
    validacion: "ok"    
  };
  return respOk;
};