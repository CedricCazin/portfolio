import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    {
        path: '',
        loadChildren: () => import('./games/games.routes').then((m) => m.ROUTES),
    },
];
