import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class PuntosController {
  @EventPattern('iniciar_puntos') // ⚡ mismo nombre de la cola
  handleClienteCreado(@Payload() data: any) {
    console.log(`💰 Puntos: creando cuenta para ${data.name}`);
  }
} 