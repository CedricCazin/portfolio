import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { CvContainerHelpComponent } from './cv-container-help/cv-container-help.component';
import { CvTimelineHelpComponent } from './cv-timeline-help/cv-timeline-help.component';
import { CvComicsHelpComponent } from './cv-comics-help/cv-comics-help.component';
import { SkillsService } from '../skills/skills.service';
import { CvMaterialHelpComponent } from './cv-material-help/cv-material-help.component';

const routes: Routes = [
  {
    path: '',
    component: CvContainerHelpComponent,
    children: [
      {
        path: 'material',
        component: CvMaterialHelpComponent,
      },
      {
        path: 'timeline',
        component: CvTimelineHelpComponent,
      },
      {
        path: 'comics',
        component: CvComicsHelpComponent,
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
    CvContainerHelpComponent,
    CvMaterialHelpComponent,
    CvTimelineHelpComponent,
    CvComicsHelpComponent,
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
    SkillsService,
  ],
})
export class CvHelpModule { }
