import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { EditReportComponent } from './edit-report/edit-report.component';
import { NgModule } from '@angular/core';

const REPORT_ROUTER: Routes = [
    {
        path: '',
        component: ReportComponent
    },
    {
        path: 'edit/:id',
        component: EditReportComponent
    }
];

export const ReportRourt = RouterModule.forChild(REPORT_ROUTER);

