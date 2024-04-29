import { Route } from '@angular/router';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesMaterialComponent } from './experiences-material/experiences-material.component';
import { ExperiencesTimelineComponent } from './experiences-timeline/experiences-timeline.component';

export const ROUTES: Route[] = [
    {
        path: '',
        component: ExperiencesComponent,
        children: [
            {
                path: 'material',
                component: ExperiencesMaterialComponent,
            },
            {
                path: 'timeline',
                component: ExperiencesTimelineComponent,
            },
            {
                path: '**',
                redirectTo: 'material',
                pathMatch: 'full',
            },
        ],
    },
];
