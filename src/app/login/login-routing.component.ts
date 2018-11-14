import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

const LOGIN_ROUTER: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const LoginRoute = RouterModule.forChild(LOGIN_ROUTER);
