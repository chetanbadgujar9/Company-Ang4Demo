import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

/**
 * This class represents the toolbar component.
 */
@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    hi() {
        alert('hi');
    }
    ngOnInit() {
        AOS.init();
    }
}
