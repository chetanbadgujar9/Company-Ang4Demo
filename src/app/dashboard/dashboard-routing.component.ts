import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

const DASHBOARD_ROUTER: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

export const DashboardRourt = RouterModule.forChild(DASHBOARD_ROUTER);

