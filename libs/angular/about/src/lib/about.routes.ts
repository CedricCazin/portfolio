import { ActivatedRouteSnapshot, Route } from '@angular/router';

import { inject } from '@angular/core';
import { AboutService } from './about.service';
import { AboutComponent } from './about.component';

export const ROUTES: Route[] = [
    {
        path: '',
        component: AboutComponent,
    },
];
