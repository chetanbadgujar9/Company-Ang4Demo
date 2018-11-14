import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from './shared/services/auto-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  show: boolean;
  constructor(private autoLogoutService: AutoLogoutService, private router: Router) {
    this.autoLogoutService = new AutoLogoutService(this.router);
    this.show = false;
  }
  ngOnInit() {
    if (localStorage.getItem('auth') !== null) {
      this.router.navigate(['/dashboard']);
      this.show = true;
    } else {
      this.router.navigate(['/login']);
      this.show = false;
    }
  }
}
