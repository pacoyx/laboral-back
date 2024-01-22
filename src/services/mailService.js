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



exports.enviarCorreo = async function (Url) {

var message = {
  from: "sistema laboral.ai<carlos.bazan@lavanderiakyo.com>",
  to: "cjbazanh@outlook.com",
  subject: "Aviso de registro laboral.ai",
  text: "Url de validacion: "+ Url,
  html: "Url de validacion: <a>"+ Url + "<a/>",
};

const info = await transporter.sendMail(message);
console.log("Message sent: %s", info.messageId);

}