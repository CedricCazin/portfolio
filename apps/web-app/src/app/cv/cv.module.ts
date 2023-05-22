import { NgModule } from '@angular/core';
import { CvContainerComponent } from './cv-container/cv-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CvTimelineComponent } from './cv-timeline/cv-timeline.component';
import { CvComicsComponent } from './cv-comics/cv-comics.component';
import { CvMaterialComponent } from './cv-material/cv-material.component';
import { CvMaterialHelpComponent } from './cv-material-help/cv-material-help.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { FloatingSkillModule } from '../shared/floating-skill/floating-skill.module';

const routes: Routes = [
  {
    path: '',
    component: CvContainerComponent,
    children: [
      {
        path: 'material',
        component: CvMaterialComponent,
      },
      {
        path: 'timeline',
        component: CvTimelineComponent,
      },
      {
        path: 'comics',
        component: CvComicsComponent,
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
    CvContainerComponent,
    CvTimelineComponent,
    CvComicsComponent,
    CvMaterialComponent,
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
export class CvModule { }
