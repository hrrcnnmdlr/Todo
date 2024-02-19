// todo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo | undefined> {
    return this.todoRepository.findOne({ where: { id } });
  }

  async create(todoData: Partial<Todo>): Promise<Todo> {
    const todo = this.todoRepository.create(todoData);
    return this.todoRepository.save(todo);
  }

  async update(id: number, todoData: Partial<Todo>): Promise<Todo | undefined> {
    await this.todoRepository.update(id, todoData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

  async removeAll(): Promise<void> {
    await this.todoRepository.clear();
  }
}
