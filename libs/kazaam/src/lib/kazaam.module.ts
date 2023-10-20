import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by-pipe.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [OrderByPipe],
    exports: [OrderByPipe],
})
export class KazaamModule {}
