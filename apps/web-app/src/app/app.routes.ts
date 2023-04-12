import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'web-app-portfolio',
    loadChildren: () =>
      loadRemoteModule('web-app-portfolio', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'web-app-skills',
    loadChildren: () =>
      loadRemoteModule('web-app-skills', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    redirectTo: 'web-app-portfolio',
    pathMatch: 'full',
  },
];
