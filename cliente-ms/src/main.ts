import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.enableCors({
  origin: "http://localhost:3000", // o 5173 si usas Vite
  credentials: true,
});
await app.listen(3001);
}
bootstrap();
