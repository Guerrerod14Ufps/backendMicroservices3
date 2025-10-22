import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class EntregaController {
  @EventPattern('entrega_nuevo')
  handleClienteCreado(@Payload() data: any) {
    console.log(`📦 Entrega: creando envío pendiente para el cliente ${data.name}`);
  }
}
