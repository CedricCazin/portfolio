import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const APP_ROUTES: Route[] = [
    {
        path: 'about',
        loadChildren: () => import('./about/routes').then((r) => r.ROUTES),
    },
    {
        path: 'experiences',
        loadChildren: () => import('./experiences/routes').then((r) => r.ROUTES),
    },
    {
        path: 'resume',
        loadChildren: () => import('./resume/routes').then((r) => r.ROUTES),
    },
    {
        path: 'skills',
        loadChildren: () => import('./skills/routes').then((r) => r.ROUTES),
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/routes').then((r) => r.ROUTES),
    },
    {
        path: 'web-app-games',
        loadChildren: () => loadRemoteModule('web-app-games', './GamesRoutes').then((r) => r.ROUTES),
    },
    {
        path: '**',
        redirectTo: 'skills',
        pathMatch: 'full',
    },
];
