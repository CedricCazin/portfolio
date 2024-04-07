import { Route } from '@angular/router';
import { ContactHelpComponent } from './contact-help/contact-help.component';
import { ContactMainComponent } from './contact-main/contact-main.component';

export const ROUTES: Route[] = [
    {
        path: '',
        outlet: 'help',
        component: ContactHelpComponent,
    },
    {
        path: '',
        component: ContactMainComponent,
    },
];
