import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Responsible for launching app and listening on specified Port
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
