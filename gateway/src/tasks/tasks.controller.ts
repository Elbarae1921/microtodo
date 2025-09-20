import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('TASKS_SERVICE') private readonly tasksService: ClientProxy,
  ) {}

  @Post('assign')
  assignTask(@Body() body: { task_id: string; user_id: string }) {
    return this.tasksService.send('task.assign', body);
  }
}
