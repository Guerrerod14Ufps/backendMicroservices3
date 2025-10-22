import { NestFactory } from '@nestjs/core';
import { EmailModule } from './email.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(EmailModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@localhost:5672'],
      queue: 'email_queue',
      queueOptions: { durable: true },
    },
  });

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.startAllMicroservices();
  await app.listen(3003); // Puerto único para email-ms

  console.log('📧 Microservicio Email escuchando en puerto 3003 y RabbitMQ');
}
bootstrap();
