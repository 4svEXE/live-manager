import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayViewComponent } from './components/day-view/day-view.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { TasksComponent } from './tasks.component';
import { DayRedirectGuard } from '../../core/guards/day-redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      { path: '', redirectTo: 'day', pathMatch: 'full' }, // Редірект з /tasks на /tasks/day
      { path: 'day', canActivate: [DayRedirectGuard], component: DayViewComponent },
      { path: 'day/:year/:month/:day', component: DayViewComponent },
      { path: 'month', component: MonthViewComponent },
    ],
  },
  { path: '**', redirectTo: 'day', pathMatch: 'full' }, // Глобальний редірект
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
