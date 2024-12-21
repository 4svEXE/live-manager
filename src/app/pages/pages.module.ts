import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, TasksModule],
})
export class PagesModule {}
