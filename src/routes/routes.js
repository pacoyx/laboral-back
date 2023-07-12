const logSistemaController = require('../controllers/logSistemaController');


module.exports = async function (app) {
    // app.post("/listarPartner", Prestamos.generalForwarding);


    app.post('/getLogSistema',logSistemaController.getLogSistema);
    app.post('/registerLogSistema',logSistemaController.registerLogSistema);
}