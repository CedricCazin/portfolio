import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule],
    template: `<p>common works!</p>`,
    styles: `
        :host {
            display: block;
        }
    `,
})
export class CommonComponent {}
