import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('user.create')
  handleUserCreate(data: { id: string; email: string }) {
    console.log('Creating user', data);
    return this.userService.createUser(data);
  }
}
