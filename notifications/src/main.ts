import { NestFactory } from '@nestjs/core';
import { NotificationsModule } from './notifications.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'notifications',
        queueOptions: {
          durable: false,
        },
        // urls: [process.env.RABBITMQ_URL],
        // queue: process.env.RABBITMQ_QUEUE,
        // queueOptions: {
        //   durable: false,
        // },
      },
    },
  );
  await app.listen();
}

void bootstrap();
