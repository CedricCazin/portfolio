import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { CvComicsComponent } from './cv/cv-comics/cv-comics.component';

export const appRoutes: Route[] = [
  {
    path: 'cv',
    loadChildren: () =>
      import('./cv/cv.module').then((m) => m.CvModule),
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
