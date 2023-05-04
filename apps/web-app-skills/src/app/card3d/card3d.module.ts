import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floatingContent';
import { Card3dComponent } from './card3d.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Card3dComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    KazaamFloatingContentModule,
  ],
  providers: [],
  exports: [Card3dComponent],
})
export class Card3dModule {}
