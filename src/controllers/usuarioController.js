const usuarioService = require('../services/usuarioService');

exports.login = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.login(body);
    return res.json(respLog);
}

exports.registrarUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.registrarUsuario(body);
    return res.json(respLog);
}

exports.validaRegistroUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await usuarioService.validaRegistroUsuario(body);
    return res.json(respLog);
}