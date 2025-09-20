import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TasksService {
  constructor(
    @Inject('NOTIFICATIONS_SERVICE')
    private readonly notificationsService: ClientProxy,
  ) {}

  assignTask(task_id: string, user_id: string) {
    // TODO: Implement task assignment logic
    this.notificationsService.emit('task.assign', {
      task_id,
      user_id,
    });
    return {
      message: 'Task assigned successfully',
    };
  }
}
