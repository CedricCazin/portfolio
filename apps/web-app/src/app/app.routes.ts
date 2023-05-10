import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'cv',
    loadChildren: () =>
      import('./cv/cv.module').then((m) => m.CvModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
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
