import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FloatingGameComponent } from './floating-game.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [FloatingGameComponent],
    imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule],
    providers: [],
    exports: [FloatingGameComponent],
})
export class FloatingGameModule {}
