import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FloatingSkillModule } from '../floating-skill/floating-skill.module';
import { SkillsMedalsHelpComponent } from './skills-medals-help/skills-medals-help.component';
import { SkillsMedalsComponent } from './skills-medals/skills-medals.component';
import { SkillsService } from './skills.service';

const routes: Routes = [
  {
    path: 'medals',
    component: SkillsMedalsHelpComponent,
  },
  {
    path: '**',
    redirectTo: 'medals',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    SkillsMedalsHelpComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    SkillsService,
  ],
})
export class SkillsHelpModule { }
