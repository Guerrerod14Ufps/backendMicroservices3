import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@localhost:5672'], // usa tus credenciales del docker-compose
      queue: 'entrega_queue',
      queueOptions: { durable: false },
    },
  });

  await app.listen();
  console.log('📦 Microservicio Entrega escuchando eventos...');
}
bootstrap();
