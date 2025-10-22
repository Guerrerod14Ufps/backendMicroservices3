import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class PuntosController {
  @EventPattern('cliente_creado')
  handleClienteCreado(data: any) {
    console.log(`🎯 Cliente recibido en PUNTOS: ${data.nombre} (Puntos iniciales: 0)`);
  }
}
