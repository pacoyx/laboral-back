const empresaService = require('../services/empresaService');

exports.registrarEmpresa = async function (req,res) {
    const body = JSON.parse(req.body.infoData);    
    const respLog = await empresaService.registrarEmpresa(body);
    const { myFile } = req.files;
    const fileName ="logo" + body.idusuario + "." + myFile.name.split(".")[1];    
    myFile.mv(__dirname + "/upload/" + fileName);
    return res.json(respLog);
}