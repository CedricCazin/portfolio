import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ResumeHelpComponent } from './resume-help/resume-help.component';
import { ResumeTimelineHelpComponent } from './resume-timeline-help/resume-timeline-help.component';
import { SkillsService } from '../skills/skills.service';
import { ResumeMaterialHelpComponent } from './resume-material-help/resume-material-help.component';

const routes: Routes = [
    {
        path: '',
        component: ResumeHelpComponent,
        children: [
            {
                path: 'material',
                component: ResumeMaterialHelpComponent,
            },
            {
                path: 'timeline',
                component: ResumeTimelineHelpComponent,
            },
            {
                path: '**',
                redirectTo: 'timeline',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    declarations: [ResumeHelpComponent, ResumeMaterialHelpComponent, ResumeTimelineHelpComponent],
    imports: [
        RouterModule.forChild(routes),

        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
    ],
    providers: [SkillsService],
})
export class ResumeHelpModule {}
