import { HttpClient } from '@angular/common/http';
import { Inject, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { IFrameComponent, MarkdownContainerComponent, MarkdownContentComponent } from '@portfolio/angular/common';

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
                path: 'tutorials-legacy',
                data: {
                    breadcrumb: { name: 'Tutorials Legacy', icon: 'build', order: 5 },
                    url: 'https://cedriccazin.github.io/tutorials/',
                },
                component: IFrameComponent,
            },
            {
                path: 'tutorials',
                data: { breadcrumb: { name: 'Tutorials', icon: 'build', order: 5 } },
                children: [
                    {
                        path: 'wsl',
                        data: {
                            breadcrumb: {
                                name: 'WSL',
                                image: '/assets/icons/wsl.png',
                                order: 0,
                            },
                            markdownContainerUri:
                                'https://raw.githubusercontent.com/CedricCazin/tutorials/main/001-setup-WSL-dev-environment/index.json',
                        },
                        component: MarkdownContainerComponent,
                    },
                    {
                        path: 'tools',
                        data: {
                            breadcrumb: {
                                name: 'Tools',
                                icon: 'construction',
                                order: 1,
                            },
                            markdownContainerUri:
                                'https://raw.githubusercontent.com/CedricCazin/tutorials/main/002-install-tools/index.json',
                        },
                        component: MarkdownContainerComponent,
                    },
                    {
                        path: '',
                        redirectTo: 'wsl',
                        pathMatch: 'full',
                    },
                ],
            },
            {
                path: 'examples',
                data: { breadcrumb: { name: 'Examples', icon: 'email', order: 6 } },
                children: [
                    {
                        path: 'angular',
                        data: { breadcrumb: { name: 'Angular', image: '/assets/icons/angular.svg', order: 0 } },
                        loadChildren: () => import('@portfolio/angular/angular-examples').then((r) => r.ANGULAR_ROUTES),
                    },
                    {
                        path: 'angular-material',
                        data: { breadcrumb: { name: 'Material', image: '/assets/icons/angular-material.svg', order: 1 } },
                        loadChildren: () =>
                            import('@portfolio/angular/angular-examples').then((r) => r.ANGULAR_MATERIAL_ROUTES),
                    },
                    {
                        path: 'nestjs',
                        data: { breadcrumb: { name: 'NestJs', image: '/assets/icons/nestjs.svg', order: 2 } },
                        loadChildren: () =>
                            import('@portfolio/angular/angular-examples').then((r) => r.ANGULAR_MATERIAL_ROUTES),
                    },
                ],
            },
            {
                path: 'personal',
                data: {
                    breadcrumb: { name: 'Personal', icon: 'cottage', order: 7 },
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
            {
                path: '**',
                redirectTo: 'work',
                pathMatch: 'full',
            },
        ],
    },
];
