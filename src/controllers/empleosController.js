const empleosService = require('../services/empleosService');

exports.registrarEmpleos = async function (req,res) {
    const body = req.body;
    const respLog = await empleosService.registrarEmpleo(body);
    return res.json(respLog);
}

exports.listarEmpleosPorUsuario = async function (req,res) {
    const body = req.body;
    const respLog = await empleosService.listarEmpleosPorIdUser(body);
    return res.json(respLog);
}

exports.listarEmpleosopenClose = async function (req,res) {
    const body = req.body;
    const respLog = await empleosService.listarEmpleosOpenClose(body);
    return res.json(respLog);
}

exports.eliminarEmpleoPorId = async function (req,res) {
    const body = req.body;
    const respLog = await empleosService.eliminarEmpleoPorId(body);
    return res.json(respLog);
}