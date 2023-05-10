import { NgModule } from '@angular/core';
import { CvComponent } from './cv.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FloatingSkillModule } from '../floating-skill/floating-skill.module';

const routes: Routes = [{ path: '', component: CvComponent }];

@NgModule({
  declarations: [CvComponent],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,

    FloatingSkillModule,
  ],
  providers: [],
})
export class CvModule { }
