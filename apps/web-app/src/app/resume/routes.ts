import { Route } from '@angular/router';
import { ResumeHelpComponent } from './resume-help/resume-help.component';
import { ResumeMaterialHelpComponent } from './resume-material-help/resume-material-help.component';
import { ResumeTimelineHelpComponent } from './resume-timeline-help/resume-timeline-help.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { ResumeMaterialComponent } from './resume-material/resume-material.component';
import { ResumeTimelineComponent } from './resume-timeline/resume-timeline.component';

export const ROUTES: Route[] = [
    {
        path: '',
        outlet: 'help',
        component: ResumeHelpComponent,
        children: [
            {
                path: 'material',
                component: ResumeMaterialHelpComponent,
            },
            {
                path: 'timeline',
                component: ResumeTimelineHelpComponent,
            },
            {
                path: '**',
                redirectTo: 'timeline',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        component: ResumeMainComponent,
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
