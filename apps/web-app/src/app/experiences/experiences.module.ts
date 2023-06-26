import { NgModule } from '@angular/core';
import { ExperiencesContainerComponent } from './experiences-container/experiences-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ExperiencesTimelineComponent } from './experiences-timeline/experiences-timeline.component';
import { ExperiencesMaterialComponent } from './experiences-material/experiences-material.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { FloatingSkillModule } from '../shared/floating-skill/floating-skill.module';
import { ExperiencesService } from './experiences.service';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesContainerComponent,
    children: [
      {
        path: 'material',
        component: ExperiencesMaterialComponent,
      },
      {
        path: 'timeline',
        component: ExperiencesTimelineComponent,
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
    ExperiencesContainerComponent,
    ExperiencesTimelineComponent,
    ExperiencesMaterialComponent,
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
  providers: [
    ExperiencesService
  ],
})
export class ExperiencesModule { }
