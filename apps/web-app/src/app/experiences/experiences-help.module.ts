import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ExperiencesContainerHelpComponent } from './experiences-container-help/experiences-container-help.component';
import { ExperiencesTimelineHelpComponent } from './experiences-timeline-help/experiences-timeline-help.component';
import { ExperiencesMaterialHelpComponent } from './experiences-material-help/experiences-material-help.component';
import { ExperiencesService } from './experiences.service';
import { SkillsService } from '../skills/skills.service';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesContainerHelpComponent,
    children: [
      {
        path: 'material',
        component: ExperiencesMaterialHelpComponent,
      },
      {
        path: 'timeline',
        component: ExperiencesTimelineHelpComponent,
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
  declarations: [
    ExperiencesContainerHelpComponent,
    ExperiencesMaterialHelpComponent,
    ExperiencesTimelineHelpComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [
    ExperiencesService,
  ],
})
export class ExperiencesHelpModule { }
