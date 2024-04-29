import { Route } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { SkillsMedalsComponent } from './skills-medals/skills-medals.component';
import { SkillsTablesComponent } from './skills-tables/skills-tables.component';

export const ROUTES: Route[] = [
    {
        path: '',
        component: SkillsComponent,
        children: [
            {
                path: 'medals',
                component: SkillsMedalsComponent,
            },
            {
                path: 'tables',
                component: SkillsTablesComponent,
            },
            {
                path: '**',
                redirectTo: 'medals',
                pathMatch: 'full',
            },
        ],
    },
];
