import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FloatingContentPathComponent } from './floating-content-path.component';
import { CommonModule } from '@angular/common';
import { KazaamFloatingContentModule } from '@ceca/kazaam/floating-content';

@NgModule({
    declarations: [FloatingContentPathComponent],
    imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule, KazaamFloatingContentModule],
    providers: [],
    exports: [FloatingContentPathComponent],
})
export class KazaamFloatingContentPathModule {}
