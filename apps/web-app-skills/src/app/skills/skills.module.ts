import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floatingContent';
import { CommonModule } from '@angular/common';

import { Card3dModule } from '../card3d/card3d.module';
import { FloatingContentPathModule } from '../floating-content-path/floating-content-path.module';

const routes: Routes = [{ path: '', component: SkillsComponent }];

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,

    Card3dModule,
    FloatingContentPathModule,

    KazaamFloatingContentModule,
  ],
  providers: [],
})
export class SkillsModule { }
