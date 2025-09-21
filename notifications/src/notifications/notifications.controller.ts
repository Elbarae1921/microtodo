import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @EventPattern('task.assign')
  handleTaskAssigned(data: { task_id: string; user_id: string }) {
    this.notificationsService.handleTaskAssigned(data);
  }
}
