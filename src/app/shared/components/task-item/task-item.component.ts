import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import Task from '../../../core/interfaces/Task';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Input() isExecuted: boolean = false;
  @Output() toggteCheckbox = new EventEmitter<void>();
  isShowDetails: boolean = false;

  toggteIsExecuted() {
    this.toggteCheckbox.emit(); // Викликаємо подію при зміні чекбоксу
  }

  showTaskDetails() {
    this.isShowDetails = !this.isShowDetails;
  }
}
