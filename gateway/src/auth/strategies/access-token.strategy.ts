import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_ACCESS_SECRET}`,
    });
  }

  validate = (validationPayload: { sub: string; email: string }) => {
    return { id: validationPayload.sub, email: validationPayload.email };
    // const user = await this.prismaService.users.findUnique({
    //   where: { email: validationPayload.email },
    //   select: {
    //     id: true,
    //     email: true,
    //   },
    // });
    // return user;
  };
}
