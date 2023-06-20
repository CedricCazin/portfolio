import { NgModule } from '@angular/core';
import { ResumeContainerComponent } from './resume-container/resume-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ResumeTimelineComponent } from './resume-timeline/resume-timeline.component';
import { ResumeMaterialComponent } from './resume-material/resume-material.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { FloatingSkillModule } from '../shared/floating-skill/floating-skill.module';

const routes: Routes = [
  {
    path: '',
    component: ResumeContainerComponent,
    children: [
      {
        path: 'material',
        component: ResumeMaterialComponent,
      },
      {
        path: 'timeline',
        component: ResumeTimelineComponent,
      },
      {
        path: '**',
        redirectTo: 'material',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ResumeContainerComponent,
    ResumeTimelineComponent,
    ResumeMaterialComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,

    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,

    FloatingSkillModule,
  ],
  providers: [],
})
export class ResumeModule { }
