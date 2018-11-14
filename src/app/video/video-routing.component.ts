import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video.component';

const VIDEO_ROUTE: Routes = [
    {
        path: '',
        component : VideoComponent
    }
];

export const VideoRoute = RouterModule.forChild(VIDEO_ROUTE);
