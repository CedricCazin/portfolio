import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'web-app-games',
    loadChildren: () =>
      loadRemoteModule('web-app-games', './Module').then(
        (m) => m.GamesModule
      ),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: '**',
    redirectTo: 'skills',
    pathMatch: 'full',
  }
];
