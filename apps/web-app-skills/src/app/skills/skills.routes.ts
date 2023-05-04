import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: 'skills',
    loadChildren: () => import('./skills.module').then((m) => m.SkillsModule),
  },
  {
    path: '**',
    redirectTo: 'skills',
    pathMatch: 'full',
  },
];
