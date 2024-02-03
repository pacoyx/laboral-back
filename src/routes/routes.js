const logSistemaController = require("../controllers/logSistemaController");
const {
  login,
  refresh,
  register,
  validarToken,
} = require("../handlers/handlers");
// const { validarToken } = require("../middleware/middlewareAuth");
const usuarioCtrl = require("../controllers/usuarioController");
const empresaCtrl = require("../controllers/empresaController");
const empleosCtrl = require("../controllers/empleosController");
const fileupload = require("express-fileupload");

module.exports = async function (app) {
  app.use(fileupload());
  
  // app.use(validarToken);

  app.post("/login", usuarioCtrl.login);
  app.post("/registerUser", usuarioCtrl.registrarUsuario);
  app.post("/validateRegisterUser", usuarioCtrl.validaRegistroUsuario);
  app.post("/validateExistsUser", usuarioCtrl.Existelogin);
  app.post("/registerCompany", empresaCtrl.registrarEmpresa);
  app.post("/getCompanyByIdUser", empresaCtrl.listarEmpresaPorIdUser);
  app.post("/registerJob", empleosCtrl.registrarEmpleos);
  app.post("/getJobsByIdUser", empleosCtrl.listarEmpleosPorUsuario);

  app.get("/health", (req, res) => {  
    //  const testMail = require("../services/mailService");  
    //  const objDatos = {
    //   url:'www.pruebas.com/sdsdsd',
    //   correo : 'pacoyx@gmail.com',
    //   nombreCompleto : 'carlos bazan'
    // }
    //  testMail.testEnviarCorreo(objDatos);
    console.log('status api ok');
    return res.json({ status: "ok" });
  });

  // app.post("/getLogSistema", logSistemaController.getLogSistema);
  // app.post("/registerLogSistema", logSistemaController.registerLogSistema);
  // app.post("/registerTest", register);
  // app.post("/loginTest", login);
  // app.post("/refreshTest", refresh);

  console.log(__dirname);
  console.log(process.cwd() );
};
