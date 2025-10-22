import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EmailService } from './email.service';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern('enviar_email_bienvenida')
  async handleEnviarEmail(@Payload() data: any) {
    console.log('📧 Evento recibido en Email MS:', data);
    await this.emailService.enviarEmailBienvenida(data);
  }
}
