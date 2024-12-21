import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { mockTasks } from '../../../core/mockData/mockTasks';
import Task from '../../../core/interfaces/Task';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.scss'],
})
export class TaskDisplayComponent {
  @Input() currentDate: string = '';

  tasks: Task[] = mockTasks;
}
