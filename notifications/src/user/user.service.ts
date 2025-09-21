import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: { id: string; email: string }) {
    return this.prisma.users.create({
      data: {
        id: data.id,
        email: data.email,
      },
    });
  }
}
