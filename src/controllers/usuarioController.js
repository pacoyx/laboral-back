const usuarioService = require("../services/usuarioService");
const fs = require("fs");

exports.login = async function (req, res) {
  const body = req.body;
  const respLog = await usuarioService.login(body);
  return res.json(respLog);
};

exports.Existelogin = async function (req, res) {
  console.log("call Existelogin()");
  const body = req.body;
  const respLog = await usuarioService.existeLogin(body);
  return res.json(respLog);
};

exports.registrarUsuario = async function (req, res) {
  const body = req.body;
  const respLog = await usuarioService.registrarUsuario(body);
  return res.json(respLog);
};

exports.validaRegistroUsuario = async function (req, res) {
  const body = req.body;
  const respLog = await usuarioService.validaRegistroUsuario(body);
  return res.json(respLog);
};

exports.actualizarDatosReclutador = async function (req, res) {
  const body = JSON.parse(req.body.infoData);
  var fileName = "";
  if (req.files) {
    const { myFile } = req.files;
    fileName = "avatar" + new Date().getTime() + "." + myFile.name.split(".")[1];
    myFile.mv(process.cwd() + "/resources/static/uploads/" + fileName);

    try {
      fs.unlinkSync(process.cwd() + "/resources/static/uploads/" + body.icono);
      console.log("File deleted!");
    } catch (error) {
      console.log("error eliminado avatar anterior", error);
    }
  }

  body.icon = fileName;
  const respLog = await usuarioService.actualizarDatosReclutador(body);
  respLog.icono = fileName;
  return res.json(respLog);
};

exports.listarReclutadorPorId = async function (req, res) {
  const body = req.body;
  const respLog = await usuarioService.listarReclutadorPorId(body);
  return res.json(respLog);
};

exports.actualizarPwdReclutador = async function (req, res) {
    const body = req.body;
    const respLog = await usuarioService.actualizarPwdReclutador(body);
    return res.json(respLog);
  };