// cliente.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Controller('clientes')
export class ClienteController {
  private puntosClient: ClientProxy;
  private emailClient: ClientProxy;
  private entregaClient: ClientProxy;

  constructor() {
    this.puntosClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@localhost:5672'],
        queue: 'puntos_queue',
      },
    });

    this.emailClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@localhost:5672'],
        queue: 'email_queue',
      },
    });
     this.entregaClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@localhost:5672'],
        queue: 'entrega_queue',
      },
    });
  }

  @Post()
  async crearCliente(@Body() data: any) {
    console.log('📨 Cliente creado:', data);
    this.puntosClient.emit('iniciar_puntos', data);
    this.emailClient.emit('enviar_email_bienvenida', data);
    this.entregaClient.emit('entrega_nuevo',data);
    return { message: 'Cliente creado exitosamente', cliente: data };
  }

  @Get()
  async listarClientes() {
    // Simula una base de datos
    return [{ nombre: 'Sebastián', email: 'sebastian@test.com' }];
  }
}
