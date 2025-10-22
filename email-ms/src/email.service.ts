import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  private transporter = nodemailer.createTransport({
     
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, // tu correo
    pass: process.env.EMAIL_PASS, // app password
  },
});
    
  async enviarEmailBienvenida(data: { name: string; email: string }) {
    const { name, email } = data;
    const mailOptions = {
      from: `"Mi Empresa" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '¡Bienvenido a nuestra plataforma!',
      text: `Hola ${name},\n\nGracias por registrarte en nuestra plataforma.`,
      html: `<p>Hola <b>${name}</b>,</p><p>Gracias por registrarte en nuestra plataforma.</p>`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`📨 Email enviado a ${email}`);
    } catch (error) {
      this.logger.error(`❌ Error enviando email a ${email}: ${error}`);
    }
  }
}
