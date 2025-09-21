import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  handleTaskAssigned(data: { task_id: string; user_id: string }) {
    // TODO: somehow notify user. Too much work for now.
    console.log(
      `[Notifications Service] Task ${data.task_id} assigned to user ${data.user_id}`,
    );
  }
}
