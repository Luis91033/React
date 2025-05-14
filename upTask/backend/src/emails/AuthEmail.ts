/** @format */

import { transporter } from "../config/nodemailer";

interface IEmail {
  email: string;
  name: string;
  token: string;
}

export class AuthEmail {
  static sendConfirmationEmail = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "UpTask <admin@uptask.com>",
      to: user.email,
      subject: "UpTask - Confirma tu cuenta",
      text: "UpTask - Confirma tu cuenta",
      html: `<p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi está todo listo
      , solo debes de confirmar tu cuenta</p>
        <p>Visita el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar Cuenta</a>
        <p>E Ingresa el código: <b>${user.token}</b></p>
        <p>Este token expira en 10 minutos</p>`,
    });
    console.log("Mensaje enviado", info.messageId);
  };

  static sendPasswordResetToken = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "UpTask <admin@uptask.com>",
      to: user.email,
      subject: "UpTask - Restablece tu password",
      text: "UpTask - Restablece tu password",
      html: `<p>Hola: ${user.name}, has solicitado restablecer tu password.</p>
        <p>Visita el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/auth/new-password">Restablecer Password</a>
        <p>E Ingresa el código: <b>${user.token}</b></p>
        <p>Este token expira en 10 minutos</p>`,
    });
    console.log("Mensaje enviado", info.messageId);
  };
}
