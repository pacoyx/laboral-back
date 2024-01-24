const logSistemaController = require("../controllers/logSistemaController");
const { login, refresh, register, validarToken } = require("../handlers/handlers");
// const { validarToken } = require("../middleware/middlewareAuth");
const usuarioCtrl = require("../controllers/usuarioController");
const empresaCtrl = require("../controllers/empresaController");
const fileupload = require('express-fileupload')

module.exports = async function (app) {   
  app.use(fileupload());
  // app.use(validarToken);
  
  app.post("/login", usuarioCtrl.login);
  app.post("/registerUser", usuarioCtrl.registrarUsuario);
  app.post("/validateRegisterUser", usuarioCtrl.validaRegistroUsuario);
  app.post("/validateExistsUser", usuarioCtrl.Existelogin);
  app.post("/registerCompany", empresaCtrl.registrarEmpresa);



  app.post("/getLogSistema", logSistemaController.getLogSistema);
  app.post("/registerLogSistema", logSistemaController.registerLogSistema);
  app.post("/registerTest", register);
  app.post("/loginTest", login);
  app.post("/refreshTest", refresh);

};
