import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SkillsMedalsHelpComponent } from './skills-medals-help/skills-medals-help.component';
import { SkillsService } from './skills.service';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillsContainerHelpComponent } from './skills-help/skills-container-help.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsContainerHelpComponent,
    children: [
      {
        path: 'medals',
        component: SkillsMedalsHelpComponent,
      },
      {
        path: '**',
        redirectTo: 'medals',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  declarations: [
    SkillsContainerHelpComponent,
    SkillsMedalsHelpComponent,
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
export class SkillsHelpModule { }
