import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TasksModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3000,
      },
    },
  );
  await app.listen();
}

void bootstrap();
