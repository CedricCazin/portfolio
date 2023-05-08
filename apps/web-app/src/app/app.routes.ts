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
    path: 'web-app-skills',
    loadChildren: () =>
      loadRemoteModule('web-app-skills', './Module').then(
        (m) => m.SkillsModule
      ),
  },
  {
    path: '',
    redirectTo: 'web-app-portfolio',
    pathMatch: 'full',
  },
];
