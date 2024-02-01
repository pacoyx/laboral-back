const empresaService = require('../services/empresaService');

exports.registrarEmpresa = async function (req,res) {
    const { myFile } = req.files;
    const body = JSON.parse(req.body.infoData);    
    const fileName ="logo" + body.ruc + "." + myFile.name.split(".")[1];    
    body.icon = fileName;
    const respLog = await empresaService.registrarEmpresa(body);

    myFile.mv(__dirname + "/upload/" + fileName);
    return res.json(respLog);
}


exports.listarEmpresaPorIdUser = async function (req,res) {
    const body = req.body;
    const respLog = await empresaService.listarEmpresaPorIdUser(body);
    return res.json(respLog);
}