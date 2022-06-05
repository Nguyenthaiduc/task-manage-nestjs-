/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  // getAllTasks() {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   //defind a temporary array to hold the result
  //   let tasks = this.getAllTasks();
  //   // do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   //do something with search
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   //return final result
  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found `);
    }
    return found;
  }

  // getTaskById(id: string): Task {
  //   // try to get task

  //   //if not found throw an error (404 not found)

  //   //ptherwise return the found task
  //   const found = this.tasks.find((task) => task.id === id);

  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found `);
  //   }
  //   return found;
  // }

   createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }


  async deleteTask(id: string): Promise<void> {
   const result = await this.tasksRepository.delete(id);
  
   if(result.affected === 0) {
     throw new NotFoundException(`Task with ID "${id}" not found`)
   }
  }

  async updateTaskStatus(id: string, status: TaskStatus) : Promise<Task> {
    const task = await this.getTaskById(id);

    task.status = status;
    await this.tasksRepository.save(task);

    return task;
  }
}
