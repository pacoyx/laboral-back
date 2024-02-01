const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "carlos.bazan@lavanderiakyo.com",
    pass: "lomejordetodo951",
  },
});

// const transporter = nodemailer.createTransport({
//   host: "mail.privateemail.com",
//   port: 465,
//   secure: true,
//   auth: {    
//     user: "empleoslaboral@laboral.ai",
//     pass: "testhack%2021AB",
//   },
// });


exports.enviarCorreo = async function (objDatos) {
  var message = {
    from: "Empleos laboral <carlos.bazan@lavanderiakyo.com>",
    to: objDatos.correo,
    subject: "Aviso de registro laboral.ai",
    text: "Url de validacion: " + objDatos.url,
    html: "Url de validacion: <a>" + objDatos.url + "<a/>",
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};


exports.testEnviarCorreo = async function () {
  var message = {
    from: "Empleos laboral <carlos.bazan@lavanderiakyo.com>",
    to: "pacoyx@gmail.com",
    subject: "Aviso de registro laboral.ai",
    text: "Url de validacion: ",
    html: "Url de validacion: <a> www.laboral.ai.com/validacionTest <a/>",
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};