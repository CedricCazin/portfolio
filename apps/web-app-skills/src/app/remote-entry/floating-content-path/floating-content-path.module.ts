import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floatingContent';
import { FloatingContentPathComponent } from './floating-content-path.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FloatingContentPathComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    KazaamFloatingContentModule,
  ],
  providers: [],
  exports: [FloatingContentPathComponent],
})
export class FloatingContentPathModule { }
