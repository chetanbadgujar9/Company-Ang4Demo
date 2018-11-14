import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoute } from './login-routing.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [SharedModule, LoginRoute]
})

export class LoginModule { }
