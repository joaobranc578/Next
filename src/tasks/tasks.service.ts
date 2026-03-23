import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entitie';

@Injectable()
export class TasksService {

	private tasks: Task[] = [
];



	listAllTasks() {
		return this.tasks;
	}

	findOneTask(id: string) {
		const task = this.tasks.find(task => task.id === Number(id));
		if(task) {
			return task;
		}
		throw new NotFoundException("Tarefa não encontrada");
	}

	create(body: any) {
		const newId = this.tasks.length + 1;
		const newTask: Task = {
			id: newId, 
			completed: false,
			...body
		}
		this.tasks.push(newTask);
		return newTask;
	}

	update(id: string, body: any) {
		const taskIndex = this.tasks.findIndex(task => task.id === Number(id));
		if(taskIndex === -1) {
			throw new NotFoundException("Tarefa não encontrada");
		}

		const taskItem = this.tasks[taskIndex];
		this.tasks[taskIndex] = {
			...taskItem,
			...body
		}
		return this.tasks[taskIndex];
	}

	delete(id: string) {
		return "Deletar a tarefa" + id
	}
}
