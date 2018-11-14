import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoute } from './home-routing.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [SharedModule, HomeRoute]
})

export class HomeModule { }
