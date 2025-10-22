import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@localhost:5672'],
      queue: 'entrega_queue',
      queueOptions: { durable: true },
    },
  });

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.startAllMicroservices();
  await app.listen(3002);

  console.log('📦 Microservicio Entrega escuchando en puerto 3002 y RabbitMQ');
}
bootstrap();
