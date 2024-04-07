import { Route } from '@angular/router';
import { SkillsHelpComponent } from './skills-help/skills-help.component';
import { SkillsMedalsHelpComponent } from './skills-medals-help/skills-medals-help.component';
import { SkillsTablesHelpComponent } from './skills-tables-help/skills-tables-help.component';
import { SkillsMainComponent } from './skills-main/skills-main.component';
import { SkillsMedalsComponent } from './skills-medals/skills-medals.component';
import { SkillsTablesComponent } from './skills-tables/skills-tables.component';

export const ROUTES: Route[] = [
    {
        path: '',
        outlet: 'help',
        component: SkillsHelpComponent,
        children: [
            {
                path: 'medals',
                component: SkillsMedalsHelpComponent,
            },
            {
                path: 'table',
                component: SkillsTablesHelpComponent,
            },
            {
                path: '**',
                redirectTo: 'medals',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        component: SkillsMainComponent,
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
