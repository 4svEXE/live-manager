import { Component } from '@angular/core';
import Task from '../../../../core/interfaces/Task';
import { TaskService } from '../../../../core/services/api/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  tasks: Task[] = [];
  newTask: Task = JSON.parse(JSON.stringify(mockTask));
  isShowForm: boolean = false;

  constructor(
    private taskService: TaskService
  ) {}

  addTask(): void {
    // this.newTask.id = this.gitHubApiService.generateId('task'); // Створення ID для нового таска
    // this.tasksService.addTask(this.newTask);
    // this.newTask = JSON.parse(JSON.stringify(mockTask));;
  }

  saveTasks(): void {
    // this.tasksService.saveTasks().subscribe(() => {
    //   console.log('Tasks saved successfully');
    // });
  }

  showAddTaskForm(): void {
    // this.isShowForm = !this.isShowForm;
  }
}

const mockTask = {
  id: '',
  text: '',
  details: '',
  categoryId: '',
  projectId: '',
  priority: 0,
  complexity: 0,
  reward: '',
  creationDate: new Date().toLocaleDateString(),
  executionDates: [],
  startHour: 0,
  endHour: 0,
};
