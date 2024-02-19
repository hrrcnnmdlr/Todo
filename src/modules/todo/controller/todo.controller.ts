// todo.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(+id);
  }

  @Post()
  async create(@Body() todoData: Partial<Todo>): Promise<Todo> {
    return this.todoService.create(todoData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todoData: Partial<Todo>,
  ): Promise<Todo> {
    return this.todoService.update(+id, todoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(+id);
  }

  @Delete()
  async removeAll(): Promise<void> {
    return this.todoService.removeAll();
  }
}
