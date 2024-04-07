import { Route } from '@angular/router';
import { AboutHelpComponent } from './about-help/about-help.component';
import { AboutMainComponent } from './about-main/about-main.component';

export const ROUTES: Route[] = [
    {
        path: '',
        outlet: 'help',
        children: [
            {
                path: 'test',
                component: AboutHelpComponent,
            },
            {
                path: 'aaa',
                component: AboutHelpComponent,
            },
            {
                path: '**',
                redirectTo: 'test',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        component: AboutMainComponent,
    },
];
