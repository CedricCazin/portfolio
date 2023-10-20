import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./games/games.module').then((m) => m.GamesModule),
    },
];
