import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Enable CORS for the entire application
    app.enableCors({
      origin: '*', // Allow any origin, or specify a list of allowed origins
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
      allowedHeaders: 'Content-Type, Accept', // Allowed headers
      credentials: true, // Allow cookies
    });
  
  await app.listen(3000);
}
bootstrap();
