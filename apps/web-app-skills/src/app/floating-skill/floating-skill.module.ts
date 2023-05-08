import { NgModule } from '@angular/core';
import { KazaamFloatingContentPathModule } from '@ceca/kazaam/floating-content-path';
import { CommonModule } from '@angular/common';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floating-content';
import { FloatingSkillComponent } from './floating-skill.component';

@NgModule({
  declarations: [FloatingSkillComponent],
  imports: [
    CommonModule,
    KazaamFloatingContentPathModule,
    KazaamFloatingContentModule,
  ],
  providers: [],
  exports: [FloatingSkillComponent],
})
export class FloatingSkillModule { }
