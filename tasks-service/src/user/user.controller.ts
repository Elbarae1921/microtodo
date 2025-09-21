import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('user.create')
  handleUserCreate(data: { id: string }) {
    console.log('Creating user', data);
    return this.userService.createUser(data.id);
  }

  @EventPattern('*')
  whatsGoingOn(data: any) {
    console.log('Whats going on', data);
  }
}
