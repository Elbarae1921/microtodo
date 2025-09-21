import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 4000,
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AccessTokenStrategy],
})
export class AuthModule {}
