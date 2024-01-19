const logSistemaController = require("../controllers/logSistemaController");
const { login, refresh, register, validarToken } = require("../handlers/handlers");
// const { validarToken } = require("../middleware/middlewareAuth");
const usuarioCtrl = require("../controllers/usuarioController");

module.exports = async function (app) {   
  // app.use(validarToken);

  app.post("/getLogSistema", logSistemaController.getLogSistema);
  app.post("/registerLogSistema", logSistemaController.registerLogSistema);

  app.post("/registerTest", register);
  app.post("/loginTest", login);
  app.post("/refreshTest", refresh);


  app.post("/registerUser", usuarioCtrl.registrarUsuario);
  app.post("/login", usuarioCtrl.login);

};
