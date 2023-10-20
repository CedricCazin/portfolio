import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FloatingSkillModule } from '../shared/floating-skill/floating-skill.module';
import { SkillsMedalsComponent } from './skills-medals/skills-medals.component';
import { SkillsService } from './skills.service';
import { SkillsTableComponent } from './skills-table/skills-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SkillsTablesComponent } from './skills-tables/skills-tables.component';

const routes: Routes = [
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

@NgModule({
    declarations: [SkillsComponent, SkillsMedalsComponent, SkillsTablesComponent, SkillsTableComponent],
    imports: [
        RouterModule.forChild(routes),

        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressBarModule,
        HttpClientModule,

        FloatingSkillModule,
    ],
    providers: [SkillsService],
})
export class SkillsModule {}
