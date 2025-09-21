import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TasksController } from './tasks/tasks.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASKS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3000,
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
