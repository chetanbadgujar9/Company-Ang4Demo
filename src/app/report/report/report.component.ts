import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
/**
 * This class represents the toolbar component.
 */
@Component({
    moduleId: module.id,
    selector: 'app-report',
    templateUrl: 'report.component.html',
    styleUrls: ['report.component.css']
})
export class ReportComponent implements OnInit {
    cars = [];
    dashboard: any;
    constructor() {
        this.dashboard = new DashboardComponent();
    }
    ngOnInit() {
        this.cars = [];
    }
    onAdd() {
        
        this.dashboard.hi();
    }
}
