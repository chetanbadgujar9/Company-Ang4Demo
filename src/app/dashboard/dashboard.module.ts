import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
// Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRourt } from './dashboard-routing.component';

import { TodoOverviewComponent } from '../todo-overview/todo-overview.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    DashboardRourt,
    SharedModule
  ]
})
export class DashboardModule { }
