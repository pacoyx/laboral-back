const logSistemaController = require("../controllers/logSistemaController");
const { login, refresh, register, validarToken } = require("../handlers/handlers");
const { validarToken } = require("../middleware/middlewareAuth");

module.exports = async function (app) {
  // app.post("/listarPartner", Prestamos.generalForwarding);

  // app.use((req, res, next) => {
  //   console.log('Time:', Date.now())
  //   console.log('req.originalUrl::',req.originalUrl);

  //   if(req.originalUrl == '/register' || req.originalUrl == '/login'){
  //       next();
  //   }else{        
  //       validarToken(req, res, next);
  //   }
  // });

  app.use(validarToken);

  app.post("/getLogSistema", logSistemaController.getLogSistema);
  app.post("/registerLogSistema", logSistemaController.registerLogSistema);

  app.post("/register", register);
  app.post("/login", login);
  app.post("/refresh", refresh);
};
