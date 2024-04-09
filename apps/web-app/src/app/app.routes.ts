import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const APP_ROUTES: Route[] = [
    {
        path: 'work',
        children: [
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
                path: '',
                redirectTo: 'about',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'personal',
        children: [
            {
                path: 'games',
                loadChildren: () => loadRemoteModule('web-app-games', './GamesRoutes').then((r) => r.ROUTES),
            },
            {
                path: '',
                redirectTo: 'games',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'work',
        pathMatch: 'full',
    },
];
