import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { AboutHelpComponent } from './about-help/about-help.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { inject } from '@angular/core';
import { AboutService } from './about.service';

export const ROUTES: Route[] = [
    {
        path: '',
        outlet: 'help',
        component: AboutHelpComponent,
    },
    {
        path: '',
        component: AboutMainComponent,
    },
];
