import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const APP_ROUTES: Route[] = [
    {
        path: '',
        data: {
            breadcrumb: { name: undefined, icon: 'home' },
        },
        children: [
            {
                path: 'work',
                data: {
                    breadcrumb: {
                        name: 'Work',
                        icon: 'business',
                    },
                },
                children: [
                    {
                        path: 'about',
                        data: { breadcrumb: { name: 'About', icon: 'portrait', order: 0 } },
                        loadChildren: () => import('@portfolio/angular/about').then((r) => r.ROUTES),
                    },
                    {
                        path: 'experiences',
                        data: { breadcrumb: { name: 'Experiences', icon: 'view_timeline', order: 1 } },
                        loadChildren: () => import('@portfolio/angular/experiences').then((r) => r.ROUTES),
                    },
                    {
                        path: 'resume',
                        data: { breadcrumb: { name: 'Resume', icon: 'description', order: 2 } },
                        loadChildren: () => import('@portfolio/angular/resume').then((r) => r.ROUTES),
                    },
                    {
                        path: 'skills',
                        data: { breadcrumb: { name: 'skills', icon: 'bar_chart', order: 3 } },
                        loadChildren: () => import('@portfolio/angular/skills').then((r) => r.ROUTES),
                    },
                    {
                        path: 'contact',
                        data: { breadcrumb: { name: 'Contact', icon: 'email', order: 4 } },
                        loadChildren: () => import('@portfolio/angular/contact').then((r) => r.ROUTES),
                    },
                    {
                        path: 'aaa',
                        resolve: {
                            breadcrumb: () => ({
                                order: 666,
                                useTemplate: true,
                                image: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
                                children: [
                                    {
                                        name: '--- id1 ---',
                                        path: '1',
                                        useTemplate: true,
                                        image: 'https://placehold.co/50x50?text=1',
                                    },
                                    {
                                        name: '--- id2 ---',
                                        path: '2',
                                        useTemplate: true,
                                        image: 'https://placehold.co/50x50?text=2',
                                    },
                                ],
                            }),
                        },
                        children: [
                            {
                                path: ':id',
                                resolve: { breadcrumb: () => ({ name: '--- id1 ---' }) },
                                children: [
                                    {
                                        path: 'bbb',
                                        data: { breadcrumb: { name: 'bbb' } },
                                        loadChildren: () => import('@portfolio/angular/about').then((r) => r.ROUTES),
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: '',
                        redirectTo: 'about',
                        pathMatch: 'full',
                    },
                ],
            },
            {
                path: 'examples',
                data: { breadcrumb: { name: 'Examples', icon: 'email', order: 5 } },
                children: [
                    {
                        path: 'angular',
                        data: { breadcrumb: { name: 'Angular', image: '/assets/angular/angular.svg', order: 0 } },
                        loadChildren: () => import('@portfolio/angular/angular-examples').then((r) => r.ANGULAR_ROUTES),
                    },
                    {
                        path: 'angular-material',
                        data: { breadcrumb: { name: 'Material', image: '/assets/angular/material.svg', order: 1 } },
                        loadChildren: () =>
                            import('@portfolio/angular/angular-examples').then((r) => r.ANGULAR_MATERIAL_ROUTES),
                    },
                ],
            },
            {
                path: 'personal',
                data: {
                    breadcrumb: { name: 'Personal', icon: 'cottage' },
                },
                children: [
                    {
                        path: 'games',
                        data: {
                            breadcrumb: { name: 'Games', icon: 'sports_esports' },
                        },
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
        ],
    },
];
