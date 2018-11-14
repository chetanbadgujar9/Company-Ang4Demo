import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VideoRoute } from './video-routing.component';

import { VideoComponent } from './video.component';
@NgModule({
    declarations: [VideoComponent],
    imports: [
        SharedModule,
        VideoRoute
    ],
})
export class VideoModule { }
