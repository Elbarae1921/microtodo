import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @MessagePattern('task.assign')
  assignTask(@Payload() body: { task_id: string; user_id: string }) {
    return this.tasksService.assignTask(body.task_id, body.user_id);
  }

  @MessagePattern('task.create')
  createTask(
    @Payload() body: { title: string; description: string; status: string },
  ) {
    return this.tasksService.createTask(body);
  }

  @MessagePattern('task.update')
  updateTask(
    @Payload()
    body: {
      task_id: string;
      title: string;
      description: string;
      status: string;
    },
  ) {
    return this.tasksService.updateTask(body.task_id, body);
  }
}
