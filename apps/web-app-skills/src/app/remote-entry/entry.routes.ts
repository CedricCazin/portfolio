import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: 'ng', component: RemoteEntryComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
