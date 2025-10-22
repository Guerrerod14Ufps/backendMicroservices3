"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
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
//# sourceMappingURL=main.js.map