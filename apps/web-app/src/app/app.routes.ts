import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'resume',
    children: [
      {
        path: '',
        outlet: 'help',
        loadChildren: () =>
          import('./resume/resume-help.module').then((m) => m.ResumeHelpModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./resume/resume.module').then((m) => m.ResumeModule),
      },
    ]
  },
  {
    path: 'skills',
    children: [
      {
        path: '',
        outlet: 'help',
        loadChildren: () =>
          import('./skills/skills-help.module').then((m) => m.SkillsHelpModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./skills/skills.module').then((m) => m.SkillsModule),
      },
    ]
  },
  {
    path: 'web-app-games',
    loadChildren: () =>
      loadRemoteModule('web-app-games', './Module').then(
        (m) => m.GamesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'skills',
    pathMatch: 'full',
  }
];
