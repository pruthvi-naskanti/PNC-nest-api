import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QuestModule } from './quest/quest.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(3000);
}
bootstrap();
