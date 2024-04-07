import { Route } from '@angular/router';
import { ExperiencesHelpComponent } from './experiences-help/experiences-help.component';
import { ExperiencesMaterialHelpComponent } from './experiences-material-help/experiences-material-help.component';
import { ExperiencesTimelineHelpComponent } from './experiences-timeline-help/experiences-timeline-help.component';
import { ExperiencesMainComponent } from './experiences-main/experiences-main.component';
import { ExperiencesMaterialComponent } from './experiences-material/experiences-material.component';
import { ExperiencesTimelineComponent } from './experiences-timeline/experiences-timeline.component';

export const ROUTES: Route[] = [
    {
        path: '',
        outlet: 'help',
        component: ExperiencesHelpComponent,
        children: [
            {
                path: 'material',
                component: ExperiencesMaterialHelpComponent,
            },
            {
                path: 'timeline',
                component: ExperiencesTimelineHelpComponent,
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
        component: ExperiencesMainComponent,
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
