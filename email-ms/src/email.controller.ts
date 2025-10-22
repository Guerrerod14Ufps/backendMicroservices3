import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class EmailController {
  @EventPattern('cliente_creado')
  handleClienteCreado(@Payload() data: any) {
    console.log(`📧 Email: enviando correo de bienvenida a ${data.email}`);
  }
}
