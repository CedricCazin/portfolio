import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
    {
        path: 'about',
        children: [
            {
                path: '',
                outlet: 'help',
                loadChildren: () => import('./about/about-help.module').then((m) => m.AboutHelpModule),
            },
            {
                path: '',
                loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
            },
        ],
    },
    {
        path: 'experiences',
        children: [
            {
                path: '',
                outlet: 'help',
                loadChildren: () => import('./experiences/experiences-help.module').then((m) => m.ExperiencesHelpModule),
            },
            {
                path: '',
                loadChildren: () => import('./experiences/experiences.module').then((m) => m.ExperiencesModule),
            },
        ],
    },
    {
        path: 'resume',
        children: [
            {
                path: '',
                outlet: 'help',
                loadChildren: () => import('./resume/resume-help.module').then((m) => m.ResumeHelpModule),
            },
            {
                path: '',
                loadChildren: () => import('./resume/resume.module').then((m) => m.ResumeModule),
            },
        ],
    },
    {
        path: 'skills',
        children: [
            {
                path: '',
                outlet: 'help',
                loadChildren: () => import('./skills/skills-help.module').then((m) => m.SkillsHelpModule),
            },
            {
                path: '',
                loadChildren: () => import('./skills/skills.module').then((m) => m.SkillsModule),
            },
        ],
    },
    {
        path: 'contact',
        children: [
            {
                path: '',
                outlet: 'help',
                loadChildren: () => import('./contact/contact-help.module').then((m) => m.ContactHelpModule),
            },
            {
                path: '',
                loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
            },
        ],
    },
    {
        path: 'web-app-games',
        loadChildren: () => loadRemoteModule('web-app-games', './Module').then((m) => m.GamesModule),
    },
    {
        path: '**',
        redirectTo: 'skills',
        pathMatch: 'full',
    },
];
