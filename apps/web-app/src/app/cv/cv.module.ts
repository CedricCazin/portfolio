import { NgModule } from '@angular/core';
import { CvComponent } from './cv.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CvComicsModule } from './cv-comics/cv-comics.module';
import { CvTimelineModule } from './cv-timeline/cv-timeline.module';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
    children: [
      {
        path: 'timeline',
        loadChildren: () =>
          import('./cv-timeline/cv-timeline.module').then((m) => m.CvTimelineModule),
      },
      {
        path: 'comics',
        loadChildren: () =>
          import('./cv-comics/cv-comics.module').then((m) => m.CvComicsModule),
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
  declarations: [CvComponent],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
})
export class CvModule { }
