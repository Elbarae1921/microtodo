import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(
    @Inject('NOTIFICATIONS_SERVICE')
    private readonly notificationsService: ClientProxy,
    private readonly prisma: PrismaService,
  ) {}

  async assignTask(task_id: string, user_id: string) {
    await this.prisma.tasks.update({
      where: { id: task_id },
      data: { assignee_id: user_id },
    });
    this.notificationsService.emit('task.assign', {
      task_id,
      user_id,
    });
    return {
      message: 'Task assigned successfully',
    };
  }

  createTask(data: { title: string; description: string; status: string }) {
    return this.prisma.tasks.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
      },
    });
  }

  updateTask(
    task_id: string,
    data: { title: string; description: string; status: string },
  ) {
    return this.prisma.tasks.update({
      where: { id: task_id },
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
      },
    });
  }
}
