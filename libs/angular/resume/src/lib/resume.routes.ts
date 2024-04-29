import { Route } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { ResumeMaterialComponent } from './resume-material/resume-material.component';
import { ResumeTimelineComponent } from './resume-timeline/resume-timeline.component';

export const ROUTES: Route[] = [
    {
        path: '',
        component: ResumeComponent,
        children: [
            {
                path: 'material',
                component: ResumeMaterialComponent,
            },
            {
                path: 'timeline',
                component: ResumeTimelineComponent,
            },
            {
                path: '**',
                redirectTo: 'material',
                pathMatch: 'full',
            },
        ],
    },
];
