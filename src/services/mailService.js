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
    from: "Aviso de registro laboral.ai <carlos.bazan@lavanderiakyo.com>",
    to: objDatos.correo,
    subject: "Aviso de registro laboral.ai",
    text: "Url de validacion: " + objDatos.url,
    html: `<html><body>
    <p>
          Hola ${objDatos.nombreCompleto},</p>

          <p>¡Bienvenido a LABORAL.AI para empresas!</p>

          <p>Estamos emocionados de confirmar que tu registro ha sido recibido con éxito. Para completar el proceso y activar tu cuenta, por favor haz clic en el siguiente enlace de confirmación:</p>

          <p>[${objDatos.url}]</p>

          <p>Una vez que hayas hecho clic en el enlace, tendrás acceso inmediato a una variedad de beneficios y servicios diseñados para optimizar tus procesos laborales y potenciar el rendimiento de tu empresa.</p>

          Atentamente,<br>
          El equipo Laboral.AI
    </body></html>`
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};


exports.testEnviarCorreo = async function (objDatos) {
  var message = {
    from: "Aviso de registro laboral.ai <carlos.bazan@lavanderiakyo.com>",
    to: objDatos.correo,
    subject: "Aviso de registro laboral.ai",
    text: "Url de validacion: " + objDatos.url,
    html: `<html><body>
    <p>
    Hola ${objDatos.nombreCompleto},</p>

    <p>¡Bienvenido a LABORAL.AI para empresas!</p>

    <p>Estamos emocionados de confirmar que tu registro ha sido recibido con éxito. Para completar el proceso y activar tu cuenta, por favor haz clic en el siguiente enlace de confirmación:</p>

    <p>[${objDatos.url}]</p>

    <p>Una vez que hayas hecho clic en el enlace, tendrás acceso inmediato a una variedad de beneficios y servicios diseñados para optimizar tus procesos laborales y potenciar el rendimiento de tu empresa.</p>

    Atentamente,<br>
    El equipo Laboral.AI
    </body></html>`
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};